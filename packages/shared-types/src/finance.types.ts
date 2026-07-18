// ============================================================
// Finance — Types partagés (web / api / worker)
// ============================================================

export type StatutPaiement =
  | "a_venir"
  | "du"
  | "en_retard"
  | "partiel"
  | "paye"
  | "annule";

export type MethodePaiement =
  | "virement"
  | "cheque"
  | "especes"
  | "carte"
  | "mobile_payment";

export interface Echeance {
  id: string;
  inscriptionId: string;
  participantId: string;
  participantNom: string;
  montantTotal: number; // en MAD
  montantPaye: number; // en MAD
  dateEcheance: string; // ISO 8601
  statut: StatutPaiement;
  methode?: MethodePaiement;
  reference?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Paiement {
  id: string;
  echeanceId: string;
  montant: number; // en MAD
  methode: MethodePaiement;
  reference: string;
  date: string; // ISO 8601
  operateur: string; // nom staff qui a enregistré
  createdAt: string;
}

export interface RecapFinancier {
  totalEncaisse: number;
  totalDu: number;
  totalEnRetard: number;
  tauxEncaissement: number; // %
  nombreEcheancesEnRetard: number;
}

export interface EncaissementMensuel {
  mois: string; // "2025-01"
  montant: number;
}
