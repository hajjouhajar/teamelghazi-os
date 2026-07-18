import type { Job } from "bullmq";

/**
 * Scoring risque de décrochage / retard de paiement
 * Calcule un score de risque par participant pour alimenter les Priorités IA
 */
export async function scoringRisqueHandler(job: Job) {
  console.log(`[scoring-risque] Processing job ${job.id}`, job.data);
  // TODO: implémenter le scoring ML de risque
}
