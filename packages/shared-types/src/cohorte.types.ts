// ============================================================
// Cohorte — Types partagés (web / api / worker)
// ============================================================

export type StatutCohorte =
  | "planifiee"
  | "ouverte"
  | "en_cours"
  | "terminee"
  | "annulee";

export interface Cohorte {
  id: string;
  code: string; // ex: "DIA-2025-01"
  programme: string; // ex: "Data & IA"
  formateur: string;
  salle: string;
  capaciteMax: number;
  capaciteActuelle: number;
  dateDebut: string; // ISO 8601
  dateFin: string; // ISO 8601
  prixUnitaire: number; // en MAD
  statut: StatutCohorte;
  objectifRemplissage: number; // % ex: 85
  createdAt: string;
  updatedAt: string;
}

export interface CreateCohorteDto {
  code: string;
  programme: string;
  formateur: string;
  salle: string;
  capaciteMax: number;
  dateDebut: string;
  dateFin: string;
  prixUnitaire: number;
  objectifRemplissage?: number;
}

export type StatutInscription =
  | "brouillon"
  | "soumise"
  | "en_attente_pieces"
  | "qualifiee"
  | "refusee"
  | "inscrite";

export interface Inscription {
  id: string;
  personneId: string;
  cohorteId: string;
  statut: StatutInscription;
  progression: number; // 0-100 %
  assiduite: number; // 0-100 %
  createdAt: string;
  updatedAt: string;
}
