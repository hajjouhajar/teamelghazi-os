# Cahier des Charges — TeamElGhazi OS
*Version 1.0 — Juillet 2026*

## 1. Contexte et Objectifs

**TeamElGhazi OS** est une plateforme de gestion tout-en-un pour centre de formation professionnelle. Elle centralise les opérations, automatise les tâches répétitives et fournit une intelligence décisionnelle en temps réel.

### Objectifs stratégiques
- Réduire le temps administratif de 40%
- Atteindre un taux d'encaissement à date ≥ 92%
- Améliorer le remplissage des cohortes à ≥ 85%
- Satisfaction participant ≥ 4,5/5

## 2. Acteurs et Rôles

| Rôle | Description | Accès |
|---|---|---|
| **Participant** | Apprenant inscrit | Portail Mon Espace uniquement |
| **Formateur** | Intervenant pédagogique | Présence, évaluations |
| **Support** | Équipe relation participant | CRM, messagerie, documents |
| **Finance** | Responsable encaissement | Paiements, factures, rapprochement |
| **Directeur** | Direction | Rapports, KPI, tous modules |
| **Admin** | Administrateur technique | Tous droits + audit + paramètres |

## 3. Modules Fonctionnels

### Module 1 — Acquisition
Gestion des leads entrants : formulaires, campagnes, consentements RGPD. Objectif : +20% de conversion lead→inscription.

### Module 2 — Personnes (Dossier unique)
Référentiel centralisé des personnes avec dédoublonnage automatique (téléphone/email), fusion de doublons (admin), historique complet.

### Module 3 — Inscriptions
Parcours de candidature : formulaire 2 min, collecte pièces, qualification, admission.

### Module 4 — Cohortes
Catalogue de formations : capacité, dates, formateur assigné, salle, jauge de remplissage (objectif 85%).

### Module 5 — Présence & Évaluation
Saisie présence (QR code / code formateur), quiz, devoirs, score, critères de certification.

### Module 6 — Finance & Encaissement
Tarification, échéanciers personnalisés, génération de factures, suivi des paiements en 6 états, rapprochement semi-automatique.

### Module 7 — Relances Multicanales
Orchestration automatisée : J-7, J-2, J0, J+3, J+10, J+20 via Email/WhatsApp/SMS. Constructeur no-code accessible aux non-développeurs.

### Module 8 — Intelligence Artificielle
- Assistant 360° (suggestions d'action par participant)
- Scoring décrochage et retard paiement
- RAG documentaire (recherche dans les documents participants)
- Génération de contenu (communications, rapports)

### Module 9 — Certificats
Génération et vérification de certificats de formation vérifiables.

### Module 10 — Audit & Sécurité
Journal immuable de toutes les actions sensibles (export, modification financière, fusion, usage IA). MFA obligatoire pour les rôles Finance et Admin.

## 4. Exigences Techniques

### Performance
- Chargement page < 2s (P95)
- API response < 200ms (P95)
- Uptime ≥ 99,5%

### Sécurité
- MFA TOTP obligatoire (Admin, Finance)
- RBAC granulaire (moindre privilège)
- Chiffrement au repos et en transit (TLS 1.3)
- Logs d'audit immuables

### Conformité
- RGPD : consentement explicite, droit à l'effacement
- Données hébergées en UE (ou Maroc selon réglementation locale)

## 5. Architecture Technique

```
[Browser/PWA] ──→ [Next.js (App Router)] ──→ [NestJS API REST]
                                                    │
                              ┌─────────────────────┼─────────────────────┐
                              ▼                     ▼                     ▼
                         [PostgreSQL]           [Redis]              [MinIO]
                         (données)             (cache/queues)       (documents)
                              │
                         [Worker BullMQ]
                         (jobs asynchrones)
```
