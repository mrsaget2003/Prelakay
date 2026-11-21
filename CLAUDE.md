# CLAUDE.md — Prélakay

Point d'entrée pour tout agent (Claude Code ou autre) travaillant dans ce dépôt. Ce fichier n'a pas vocation à dupliquer `docs/` : il **oriente** vers le bon document selon ce que vous faites, et porte les règles transverses qui s'appliquent quel que soit le document consulté. SAGA est le porteur de projet ; toute mention de « valider avec SAGA » renvoie à lui.

## Le projet

Prélakay est une marketplace à la haïtienne : commandes en ligne auprès de commerces locaux, retrait en magasin ou livraison, argent protégé jusqu'à la remise (escrow). Ce dépôt porte la **landing page publique** (`www.prelakay.com`) — vitrine, pages partenaires, blog, documentation, marque — distincte de l'application (PWA, `app.prelakay.com`), de l'espace vendeur et de l'admin, qui vivent dans `Prelakay-web`.

**Contact** : `dev@prelakay.com` · [www.prelakay.com](https://www.prelakay.com)

## Carte des documents — quoi lire selon la tâche

| Vous travaillez sur… | Allez d'abord dans… |
| --- | --- |
| Une couleur, une police, un composant, un espacement, le logo | `docs/design-prelakay.md` (v1.1) — **seule source de vérité** |
| La structure d'une page, un flux (recherche, fiche produit, panier, dashboard vendeur/admin) | `docs/DESIGN.md` §9 — mécaniques inspirées d'AliExpress, peau Prélakay |
| Le découpage en pages de la landing, le SEO, le blog, l'ordre des étapes | `docs/PLAN.md` |
| Quel skill Claude Code invoquer, et dans quel ordre | `docs/SKILLS.md` |

Si un document de `docs/` contredit ce fichier sur un point de détail, **le document spécialisé gagne** — ce fichier ne porte que ce qui est transverse ou pas encore écrit ailleurs.

## Règles du projet

1. **Rien ne part en code avant d'être formalisé** dans les docs (PRD, `docs/PLAN.md`) et validé par SAGA. Un document marqué « proposition » n'est un feu vert qu'une fois SAGA passé dessus explicitement.
2. **`docs/design-prelakay.md` v1.1 est la seule source de vérité** pour couleurs, typographie, logo, composants. Toute valeur ailleurs qui le contredit est une erreur à corriger, pas une variante à garder.
3. **Une étape à la fois, vérifiable au navigateur**, avant de passer à la suivante (voir l'ordre dans `docs/PLAN.md` §7). Jamais plusieurs pages ou fonctionnalités en parallèle sans point de contrôle.
4. **`prefers-reduced-motion` est respecté partout** : aucune animation hors chargement quand il est actif.
5. **Aucune nouvelle dépendance** (paquet npm, service tiers, API payante) **sans validation explicite de SAGA** au préalable — proposer, pas installer.
6. **Vouvoiement partout, ton direct et chaleureux**, jamais de jargon technique dans le texte visible par un utilisateur (`docs/design-prelakay.md` §1).
7. **Référence AliExpress : la structure et les mécaniques, jamais la peau.** Pour les écrans à forte mécanique (recherche, fiche produit, panier, dashboards), s'inspirer de l'organisation d'AliExpress pour aller vite (`docs/DESIGN.md` §9). Ne jamais reprendre ses couleurs (rouge/orange), son logo, ses textes, ses badges ou programmes commerciaux — l'identité visuelle vient toujours de `docs/design-prelakay.md`.
8. **Les textes légaux** (mentions, confidentialité, conditions) n'existent qu'à un seul endroit validé à la fois ; toute copie ailleurs (ex. pied de page de la landing) est synchronisée à la main tant qu'il n'y a qu'une seule source (`data/legal/documents.json` côté PWA).
9. **La landing est ouverte aux robots partout** (`robots.txt` : `allow: "/"`), contrairement au PWA et à l'admin. Ne jamais copier la config robots d'un espace vers l'autre sans vérifier ce point.
10. **Tout asset republié publiquement respecte sa licence** — voir Crédits ci-dessous. Un statut y change seulement sur instruction explicite de SAGA.

## Stack

Next.js (App Router, TypeScript), export statique dès que possible. **Pas de Tailwind, pas de CDN de polices** : CSS via les tokens de `docs/design-prelakay.md` §8.5 (variables `--color-*`, `--radius-*`, `--space-*`, déjà câblées dans `app/globals.css`), polices servies en local en `.woff2` depuis `public/fonts/_woff2/`. Toute addition (analytics, MDX pour le blog…) passe par la règle 5.

## Crédits & licences des assets

Confirmé par SAGA le 21 novembre 2026 — tous les assets ci-dessous sont utilisables, y compris en republication publique (`/marque` notamment).

| Asset | Source | Statut |
| --- | --- | --- |
| Fraunces, Onest | Google Fonts (SIL Open Font License) | ✅ |
| Surgena (wordmark) | fournisseur de la police du logo | ✅ confirmé par SAGA |
| Formes 3D Squiggle / clay (`public/illustrations/Squiggle_3D/`, `shape-clay_3D/`, `deco/`) | pack d'illustrations 3D | ✅ confirmé par SAGA |
| Fluent Emoji (illustrations 3D type `hand-guestures_3D`) | Microsoft, licence MIT | ✅ |
| Illustrations storyset (`public/illustrations/storyset/bro`, `/rafiki`) | Storyset / Freepik | ✅ confirmé par SAGA |
| BoxIcons | open-source | ✅ fallback en attendant l'accès au MCP Iconly Pro payant |
| Photos vitrine | Unsplash (licence libre) | ✅ jamais sur un produit, uniquement pages « vitrine » (partenaires, home) |
| Logo Prélakay (`public/logo/`, `_README/logo/`) | Prélakay LLC | ✅ propriétaire — usage externe avec attribution (voir `/marque` une fois publiée) |
