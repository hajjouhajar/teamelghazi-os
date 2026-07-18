# TeamElGhazi OS

Plateforme de gestion pour centre de formation professionnelle — centralise les participants, automatise l'encaissement et les relances, assiste l'équipe avec l'IA, et donne à la direction une vision temps réel de l'inscription à la certification.

## Stack Technique

| Couche | Technologie |
|---|---|
| Frontend | Next.js 14+ (App Router), TypeScript, Tailwind CSS |
| API | NestJS (REST + RBAC) |
| Workers | Redis/BullMQ (jobs asynchrones) |
| Base de données | PostgreSQL |
| Stockage objet | MinIO (dev) / S3-compatible (prod) |
| Cache | Redis |
| Monorepo | pnpm workspaces |

## Structure

```
teamelghazi-os/
├── apps/
│   ├── web/      # Next.js — Frontend PWA + Portails
│   ├── api/      # NestJS — API REST, Auth & RBAC
│   └── worker/   # Workers asynchrones Redis/queues
├── packages/
│   ├── shared-types/   # DTO/enums partagés
│   ├── design-system/  # Tokens + composants UI réutilisables
│   └── config/         # ESLint, TSConfig partagés
├── infra/              # Docker Compose, migrations
└── docs/               # Cahier des charges, RACI, KPI
```

## Démarrage rapide

```bash
# Prérequis : Node 18+, pnpm 9+, Docker
pnpm install

# Démarrer l'infra (Postgres, Redis, MinIO)
docker-compose -f infra/docker-compose.yml up -d

# Démarrer le frontend (dev)
pnpm dev
```

## Modules Fonctionnels

1. **Acquisition** — Leads, campagnes, formulaires, consentements RGPD
2. **Personnes** — Dossier unique, dédoublonnage, fusion
3. **Inscriptions** — Candidature, pièces, qualification
4. **Cohortes** — Catalogue, capacité, dates, formateurs, salles
5. **Finance** — Tarifs, échéanciers, factures, paiements, rapprochement
6. **Relances** — Orchestration multicanale J-7/J-2/J0/J+3/J+10/J+20
7. **IA** — Assistant 360°, scoring décrochage, RAG documentaire
8. **Certificats** — Certificats vérifiables

## Charte Graphique

| Token | Couleur | Usage |
|---|---|---|
| `--color-primary` | `#F5A623` | Orange — CTA, actions principales |
| `--color-dark` | `#0B1E33` | Bleu marine — sidebar, blocs IA |
| `--color-bg-light` | `#FBF7EF` | Fond page chaleureux |
| `--color-teal` | `#1B7A6B` | Statuts positifs ("Payé") |
| `--color-blue` | `#3D6FE0` | Information, pilotage |
| `--color-red` | `#E15353` | Alertes, retards |
| `--color-purple` | `#8B5FBF` | Métriques secondaires |
