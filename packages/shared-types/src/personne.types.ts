// ============================================================
// Personne — Types partagés (web / api / worker)
// ============================================================

export type Genre = "M" | "F" | "autre";

export type StatutPersonne =
  | "prospect"
  | "candidat"
  | "inscrit"
  | "actif"
  | "diplome"
  | "abandonne";

export interface Personne {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  genre?: Genre;
  dateNaissance?: string; // ISO 8601
  adresse?: string;
  ville?: string;
  pays?: string;
  statut: StatutPersonne;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePersonneDto {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  genre?: Genre;
  dateNaissance?: string;
  adresse?: string;
  ville?: string;
}

export interface UpdatePersonneDto extends Partial<CreatePersonneDto> {
  statut?: StatutPersonne;
}
