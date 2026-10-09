/**
 * Script to collect and verify detailed geopolitical intelligence
 * via Groq API (openai/gpt-oss-120b / qwen/qwen3.8-27b)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getApiKey } from './intelligencePipeline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

async function queryGroq(prompt, systemPrompt = 'You are a senior geopolitical intelligence analyst specializing in Arctic geopolitics, defense diplomacy, and declassified covert operations. Provide structured, accurate, and detailed intelligence.') {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('No API key found in environment');
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-120b',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 4000
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

async function main() {
  console.log('Querying Groq for Greenland deep geopolitical analysis...');
  const greenlandPrompt = `Synthesize a comprehensive, rigorous geopolitical intelligence dossier for GREENLAND (ISO3: GRL).
Focus specifically on:
1. US-Denmark-Greenland Competition & Strategic Motives (Pituffik / Thule Space Base, 1951 Defense Agreement, Igaliku Agreement, Trump 2019 purchase bid and Danish rebuff, Chinese 2018 airport bids and Danish/US veto, Kvanefjeld & Tanbreez rare earth minerals, Arctic shipping routes GIUK gap).
2. Covert historical programs and conspiracies (Project Iceworm & Camp Century nuclear base under the ice, 1968 Thule B-52 nuclear crash cover-up, missing bomb secondary, Truman 1946 purchase offer).
3. Current political system, leadership (Mute B. Egede, Inatsisartut), independence dilemma, Danish block grant (bloktilskud).
4. India strategic connection (Arctic Policy 2022, glaciological research at Himadri/Svalbard, monsoon impact, critical minerals).

Output as valid JSON with keys:
"tagline", "overview" (beginner, advanced), "history" (array of 6 chronological milestones), "competitionAnalysis" (US, Denmark, China, Indigenous autonomy), "covertPrograms" (array of covert ops), "strategicLocations" (Pituffik, Nuuk, Kvanefjeld, Tanbreez), "indiaConnection".`;

  try {
    const result = await queryGroq(greenlandPrompt);
    console.log('Received Greenland intelligence (length:', result.length, ')');
    fs.writeFileSync(path.join(ROOT_DIR, 'scripts/greenland_intel_raw.json'), result);
    console.log('Saved to scripts/greenland_intel_raw.json');
  } catch (err) {
    console.error('Error running Groq query:', err.message);
  }
}

main();
