import type { Job } from "bullmq";

/**
 * Embeddings pour RAG documentaire
 * Génère et indexe les embeddings des documents participants
 */
export async function embeddingsHandler(job: Job) {
  console.log(`[embeddings] Processing job ${job.id}`, job.data);
  // TODO: appeler l'API d'embeddings et indexer dans la base vectorielle
}
