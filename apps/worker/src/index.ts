import { Worker, Queue } from "bullmq";
import { relanceSchedulerHandler } from "./jobs/relance-scheduler";
import { rapprochementHandler } from "./jobs/rapprochement";
import { scoringRisqueHandler } from "./jobs/scoring-risque";
import { embeddingsHandler } from "./jobs/embeddings";

const connection = {
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD || "changeme",
};

console.log("🔧 TeamElGhazi OS Worker démarré");

// Queue: Relances
new Worker("relances", relanceSchedulerHandler, { connection });

// Queue: Rapprochement financier
new Worker("rapprochement", rapprochementHandler, { connection });

// Queue: Scoring risque décrochage
new Worker("scoring-risque", scoringRisqueHandler, { connection });

// Queue: Embeddings RAG
new Worker("embeddings", embeddingsHandler, { connection });

console.log("✅ Workers enregistrés: relances | rapprochement | scoring-risque | embeddings");
