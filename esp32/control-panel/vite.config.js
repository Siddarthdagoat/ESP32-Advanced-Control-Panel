import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function intelligenceMiddlewarePlugin() {
  return {
    name: 'intelligence-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api/intelligence')) {
          try {
            const { defaultPipeline, getApiKey, getNewsDataApiKey, fetchNewsDataDispatches, executeGroqAgentChat, generateGlobalBriefing } = await import('./scripts/intelligencePipeline.js');
            const url = new URL(req.url, 'http://localhost:3000');
            
            res.setHeader('Content-Type', 'application/json');

            // Read POST body if applicable
            let body = {};
            if (req.method === 'POST') {
              try {
                const chunks = [];
                for await (const chunk of req) {
                  chunks.push(chunk);
                }
                const bodyStr = Buffer.concat(chunks).toString();
                if (bodyStr) body = JSON.parse(bodyStr);
              } catch (_) {}
            }

            if (url.searchParams.get('health') === 'true') {
              res.end(JSON.stringify({
                status: 'OPERATIONAL',
                provider: 'Groq Cloud High-Speed Inference',
                model: 'openai/gpt-oss-120b',
                isKeyConfigured: !!getApiKey(),
                isNewsDataConfigured: !!getNewsDataApiKey(),
                service: 'GEOINTEL Local Dev Ingestion Pipeline'
              }));
              return;
            }

            // Agent chat
            if (body.action === 'agent_chat' || url.searchParams.get('action') === 'agent_chat') {
              const message = body.message || url.searchParams.get('message');
              const mode = body.mode || url.searchParams.get('mode') || 'beginner';
              const context = body.context || {};
              const history = body.history || [];
              const agentResp = await executeGroqAgentChat({ message, mode, context, history });
              res.end(JSON.stringify({
                success: true,
                response: agentResp,
                provider: `Groq Cloud High-Speed Inference (${agentResp.model})`
              }));
              return;
            }

            // Global Briefing
            if (url.searchParams.get('type') === 'briefing' || body.action === 'briefing') {
              const briefing = await generateGlobalBriefing(url.searchParams.get('timeframe') || body.timeframe || '24h');
              res.end(JSON.stringify({ success: true, briefing }));
              return;
            }

            // News dispatches
            if (url.searchParams.get('type') === 'news') {
              const newsKey = getNewsDataApiKey();
              const q = url.searchParams.get('q') || 'geopolitics OR military OR sanctions OR conflict';
              if (newsKey) {
                const dispatches = await fetchNewsDataDispatches(newsKey, q);
                res.end(JSON.stringify({
                  success: true,
                  provider: 'NewsData.io Real-Time Dispatch Engine',
                  query: q,
                  total: dispatches.length,
                  dispatches
                }));
                return;
              }
            }

            if (req.method === 'POST' || url.searchParams.get('action') === 'refresh') {
              const cycleResult = await defaultPipeline.runCycle(3);
              const feedData = defaultPipeline.loadExistingEvents();
              res.end(JSON.stringify({
                success: true,
                cycleResult,
                telemetry: feedData.telemetry,
                events: feedData.events,
                changeLog: feedData.changeLog
              }));
              return;
            }

            // Default GET: Return live feed
            const feedData = defaultPipeline.loadExistingEvents();
            res.end(JSON.stringify({
              success: true,
              telemetry: feedData.telemetry,
              events: feedData.events,
              changeLog: feedData.changeLog
            }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
          return;
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), intelligenceMiddlewarePlugin()],
  server: {
    port: 3000,
    host: true
  }
})
