import type { Job } from "bullmq";

/**
 * Rapprochement bancaire semi-automatique
 * Compare les paiements reçus aux échéances ouvertes
 */
export async function rapprochementHandler(job: Job) {
  console.log(`[rapprochement] Processing job ${job.id}`, job.data);
  // TODO: implémenter le rapprochement semi-automatique
}
