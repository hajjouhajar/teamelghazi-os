/**
 * TeamElGhazi OS — Design Tokens (TypeScript version)
 * Version TS des couleurs partagées avec le CSS tokens.css
 * ★ Charte graphique officielle — à confirmer avec le fichier source logo/charte
 */

export const colors = {
  primary: "#F5A623",    // Orange — CTA, actions principales, badges MVP
  dark: "#0B1E33",       // Bleu marine — fonds sombres (IA, Confiance)
  bgLight: "#FBF7EF",    // Fond clair chaleureux

  teal: "#1B7A6B",       // Opérations, statut "Payé"
  blue: "#3D6FE0",       // Pilotage, information
  red: "#E15353",        // Alertes, retards
  purple: "#8B5FBF",     // Accent secondaire (ex: Satisfaction)

  text: "#1A1A1A",
  textMuted: "#6B7280",
  border: "#E5E7EB",
  white: "#FFFFFF",
} as const;

export type ColorToken = keyof typeof colors;

/**
 * Couleurs des statuts financiers
 * Usage exclusif : composant <FinanceStatusBadge>
 */
export const financeStatusColors = {
  a_venir: colors.blue,
  du: colors.primary,
  en_retard: colors.red,
  partiel: colors.purple,
  paye: colors.teal,
  annule: "#9CA3AF", // gris neutre
} as const;

/**
 * Espacements (grille 8px)
 */
export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
} as const;

/**
 * Border radius
 */
export const radius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;

export default { colors, financeStatusColors, spacing, radius };
