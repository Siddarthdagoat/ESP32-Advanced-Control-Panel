/**
 * Script to collect comprehensive geopolitical covert operations,
 * declassified state files, and intelligence theories/conspiracies via Groq
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { getApiKey } from './intelligencePipeline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function queryGroqViaHttps(prompt) {
  return new Promise((resolve, reject) => {
    const apiKey = getApiKey();
    if (!apiKey) return reject(new Error('No API key found'));

    const postData = JSON.stringify({
      model: 'openai/gpt-oss-120b',
      messages: [
        {
          role: 'system',
          content: 'You are an apex geopolitical intelligence analyst. Provide comprehensive, objective analysis of covert operations, shadow diplomacy, declassified state secrets, and geopolitical conspiracies/theories. Output raw JSON only.'
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 3500
    });

    const options = {
      hostname: 'api.groq.com',
      port: 443,
      path: '/openai/v1/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 30000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 400) {
            reject(new Error(parsed.error?.message || `HTTP ${res.statusCode}`));
          } else {
            resolve(parsed.choices?.[0]?.message?.content || '');
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${body.slice(0, 200)}`));
        }
      });
    });

    req.on('error', err => reject(err));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timed out'));
    });

    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Querying Groq for Geopolitical Covert Operations & Intelligence Conspiracies...');
  const prompt = `Synthesize a structured intelligence database of 12 landmark geopolitical covert operations, intelligence theories, and geopolitical conspiracies.

Include:
1. "PROJECT_ICEWORM" (Greenland nuclear missile base under ice, Camp Century, PM-2A reactor, concealed from Denmark)
2. "THULE_B52_NUCLEAR_COVERUP" (1968 Greenland crash, missing thermonuclear secondary, Operation Crested Ice, radiation cover-up)
3. "NORD_STREAM_SABOTAGE" (Baltic Sea 2022 pipeline demolition, competing theories: Ukrainian Andromeda yacht vs US Navy BALTOPS covert dive vs Russian false flag)
4. "OPERATION_GLADIO" (NATO Cold War stay-behind clandestine armies in Western Europe, arms caches, Italian Strategy of Tension)
5. "PROJECT_AZORIAN" (CIA covert salvage of Soviet submarine K-129 using Howard Hughes mining cover)
6. "OPERATION_OLYMPIC_GAMES_STUXNET" (US-Israeli cyber kinetic attack on Natanz uranium enrichment centrifuges)
7. "CHAGOS_EXPULSION_DIEGO_GARCIA" (UK-US secret agreement depopulating Chagossian archipelago to build Diego Garcia base)
8. "ECHELON_FIVE_EYES_INTERCEPT" (Global signals intelligence interception network tapping undersea cables and satellites)
9. "HAVANA_SYNDROME_DIRECTED_ENERGY" (Anomalous health incidents affecting diplomats worldwide, pulsed microwave/RF debate)
10. "HAARP_ELECTROMAGNETIC_GEOPOLITICS" (Alaska ionospheric research facility, weather manipulation & earthquake weapon geopolitical claims vs science)
11. "AQ_KHAN_NUCLEAR_BLACK_MARKET" (Pakistan-North Korea-Libya-Iran illicit centrifuge technology smuggling ring)
12. "PEGASUS_SURVEILLANCE_INTRIGUE" (NSO Group zero-click spyware targeting heads of state, Macron, diplomats, and journalists)

Return a valid JSON array of objects with keys:
id, title, codename, category, classificationLevel, primaryActors, geographicLocation (region, country, lat, lng, sector), era, summary, declassifiedFacts, theConspiracyOrTheory, geopoliticalFallout, verificationStatus, evidenceDossier, indiaAngle.`;

  try {
    const result = await queryGroqViaHttps(prompt);
    console.log('Received conspiracy & covert ops intelligence (length:', result.length, ')');
    fs.writeFileSync(path.join(ROOT_DIR, 'scripts/conspiracies_intel_raw.json'), result);
    console.log('Saved to scripts/conspiracies_intel_raw.json');
  } catch (err) {
    console.error('Error running Groq query:', err.message);
  }
}

main();
