/**
 * GEOINTEL Ingestion Worker CLI & Background Daemon
 * 
 * Usage:
 *   node scripts/runIngestionWorker.js --once
 *   node scripts/runIngestionWorker.js --daemon --interval 600000
 */

import { defaultPipeline } from './intelligencePipeline.js';

const args = process.argv.slice(2);
const isOnce = args.includes('--once') || args.length === 0;
const intervalIndex = args.indexOf('--interval');
const intervalMs = intervalIndex !== -1 && args[intervalIndex + 1] 
  ? parseInt(args[intervalIndex + 1], 10) 
  : 10 * 60 * 1000; // default 10 mins

async function executeCycle() {
  console.log(`[${new Date().toISOString()}] Starting live global intelligence ingestion cycle...`);
  try {
    const result = await defaultPipeline.runCycle(4); // process up to 4 fresh distinct events per cycle
    if (result.status === 'SUCCESS') {
      console.log(`[SUCCESS] Ingestion cycle complete in ${result.telemetry.executionDurationMs}ms.`);
      console.log(`  Sources checked: ${result.telemetry.sourcesChecked}`);
      console.log(`  Candidate articles: ${result.telemetry.candidateArticlesCount}`);
      console.log(`  Synthesized: ${result.telemetry.synthesizedCount}`);
      console.log(`  New events added: ${result.createdCount}`);
      console.log(`  Existing events updated: ${result.updatedCount}`);
      console.log(`  Total active events in DB: ${result.telemetry.totalActiveEvents}`);
    } else {
      console.warn(`[WARNING] Ingestion cycle status: ${result.status}`, result.error || result.message);
    }
  } catch (err) {
    console.error(`[ERROR] Ingestion cycle failed:`, err.message);
  }
}

if (isOnce) {
  executeCycle().then(() => {
    console.log('Single run complete. Exiting.');
    process.exit(0);
  });
} else {
  console.log(`[DAEMON] GEOINTEL Ingestion daemon started. Polling every ${intervalMs / 1000}s.`);
  executeCycle();
  setInterval(executeCycle, intervalMs);
}
