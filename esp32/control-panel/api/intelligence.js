/**
 * Vercel Serverless Function: /api/intelligence
 * 
 * Provides:
 * - GET: Live intelligence feed, telemetry, and change logs
 * - GET ?type=conspiracies: Covert operations & geopolitical conspiracies database
 * - GET ?country=GRL: Full deep geopolitical country dossier
 * - POST: Trigger real-time ingestion cycle via Groq + Authoritative RSS
 * - HEALTH: Provider status without secret exposure
 */

import fs from 'fs';
import path from 'path';
import { defaultPipeline, getApiKey } from '../scripts/intelligencePipeline.js';
import { GEOPOLITICAL_CONSPIRACIES } from '../src/data/geointelConspiracies.js';
import { COUNTRY_DOSSIERS, getCountryDossier } from '../src/data/geointelCountryDossiers.js';
import { WORLD_HISTORY_EVENTS, HISTORICAL_PERIODS } from '../src/data/history/worldHistoryEvents.js';
import { SOVIET_15_REPUBLICS, SOVIET_HISTORICAL_ENTITIES_EXPLAINER } from '../src/data/history/sovietRepublicsTransition.js';
import { HISTORICAL_EMPIRES } from '../src/data/history/historicalEmpires.js';
import { getCompleteCountryHistory } from '../src/data/history/countryHistoriesRegistry.js';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { query, method } = req;

  // 1. Health check endpoint
  if (query.health === 'true') {
    const key = getApiKey();
    return res.status(200).json({
      status: 'OPERATIONAL',
      provider: 'Groq Cloud High-Speed Inference',
      model: 'openai/gpt-oss-120b',
      fallbackModel: 'qwen/qwen3.8-27b',
      isKeyConfigured: !!key,
      service: 'GEOINTEL Planetary Ingestion Pipeline & Shadow Intelligence',
      totalConspiracies: GEOPOLITICAL_CONSPIRACIES.length,
      timestamp: new Date().toISOString()
    });
  }

  // 2. Covert Operations & Geopolitical Conspiracies Endpoint
  if (query.type === 'conspiracies' || query.conspiracies === 'true') {
    const category = query.category;
    const items = category && category !== 'ALL'
      ? GEOPOLITICAL_CONSPIRACIES.filter(c => c.category === category)
      : GEOPOLITICAL_CONSPIRACIES;

    return res.status(200).json({
      success: true,
      total: items.length,
      category: category || 'ALL',
      conspiracies: items
    });
  }

  // 3. World History Timeline Endpoint
  if (query.type === 'history') {
    const period = query.period;
    const items = period && period !== 'ALL'
      ? WORLD_HISTORY_EVENTS.filter(e => e.period === period)
      : WORLD_HISTORY_EVENTS;

    return res.status(200).json({
      success: true,
      total: items.length,
      period: period || 'ALL',
      periods: HISTORICAL_PERIODS,
      events: items
    });
  }

  // 4. The 15 Soviet Republics Transition Database
  if (query.type === 'soviet_republics' || query.type === 'ussr') {
    return res.status(200).json({
      success: true,
      total: SOVIET_15_REPUBLICS.length,
      legalEntityExplainer: SOVIET_HISTORICAL_ENTITIES_EXPLAINER,
      republics: SOVIET_15_REPUBLICS
    });
  }

  // 5. Historical Empires Database
  if (query.type === 'empires') {
    return res.status(200).json({
      success: true,
      total: HISTORICAL_EMPIRES.length,
      empires: HISTORICAL_EMPIRES
    });
  }

  // 6. Deep Country Dossier Lookup (e.g. ?country=GRL or ?country=DNK or ?country=UKR)
  if (query.country) {
    const code = String(query.country).toUpperCase();
    const dossier = getCountryDossier(code, { id: code, name: code });
    return res.status(200).json({
      success: true,
      countryCode: code,
      dossier
    });
  }

  // 4. Trigger Refresh Cycle (POST or GET with action=refresh for cron)
  if (method === 'POST' || query.action === 'refresh') {
    try {
      const cycleResult = await defaultPipeline.runCycle(3);
      const feedData = defaultPipeline.loadExistingEvents();
      return res.status(200).json({
        success: true,
        cycleResult,
        telemetry: feedData.telemetry,
        events: feedData.events,
        changeLog: feedData.changeLog,
        conspiracies: GEOPOLITICAL_CONSPIRACIES
      });
    } catch (err) {
      console.error('API Ingestion error:', err.message);
      return res.status(500).json({
        success: false,
        error: 'Ingestion pipeline encounter: ' + err.message
      });
    }
  }

  // 5. Default GET: Return live feed + conspiracies overview
  try {
    const feedData = defaultPipeline.loadExistingEvents();
    return res.status(200).json({
      success: true,
      telemetry: feedData.telemetry,
      events: feedData.events,
      changeLog: feedData.changeLog,
      conspiraciesCount: GEOPOLITICAL_CONSPIRACIES.length,
      conspiracies: GEOPOLITICAL_CONSPIRACIES.slice(0, 5) // preview top 5
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Failed to retrieve intelligence feed'
    });
  }
}
