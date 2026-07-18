import type { Job } from "bullmq";

/**
 * Relance Scheduler — J-7, J-2, J0, J+3, J+10, J+20
 * Déclenche les séquences de relance multicanale (Email / WhatsApp / SMS)
 * selon les règles configurées dans le constructeur no-code.
 */
export async function relanceSchedulerHandler(job: Job) {
  console.log(`[relance-scheduler] Processing job ${job.id}`, job.data);
  // TODO: implémenter la logique de relance
  // 1. Récupérer les participants ciblés (statut en_retard, du, partiel)
  // 2. Vérifier le consentement RGPD de chaque participant
  // 3. Choisir le canal prioritaire (WhatsApp > SMS > Email selon consentement)
  // 4. Envoyer via l'API de messagerie correspondante
  // 5. Logger dans le journal d'audit
}
