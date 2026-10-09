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
            const { defaultPipeline, getApiKey } = await import('./scripts/intelligencePipeline.js');
            const url = new URL(req.url, 'http://localhost:3000');
            
            res.setHeader('Content-Type', 'application/json');

            if (url.searchParams.get('health') === 'true') {
              res.end(JSON.stringify({
                status: 'OPERATIONAL',
                provider: 'Groq Cloud High-Speed Inference',
                model: 'openai/gpt-oss-120b',
                isKeyConfigured: !!getApiKey(),
                service: 'GEOINTEL Local Dev Ingestion Pipeline'
              }));
              return;
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
