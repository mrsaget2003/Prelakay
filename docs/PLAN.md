# Plan — landing page Prélakay (`www.prelakay.com`)

Statut : proposition, à valider par SAGA avant code (voir [README.md](README.md)). Construite **après** le PWA (`docs/06-plan.md` Phase 11bis).

## 1. Principe : immersif sur desktop, sobre sur mobile

Même contenu, deux manières de le vivre — pas deux sites.

| | Desktop | Mobile |
| --- | --- | --- |
| **Mouvement** | Scroll storytelling : sections qui se révèlent, parallax léger sur les formes 3D (squiggles/clay déjà teintés par `scripts/deco-tint.mjs` dans le PWA), curseur qui déplace légèrement les illustrations | Entrées discrètes, pas de parallax ni de suivi du curseur — coûte en 4G (objectif performance du projet) |
| **Mise en page** | Pleine largeur, sections qui occupent l'écran, images grand format | Une colonne, contenu d'abord, CTA toujours visible |
| **Densité** | Peut se permettre des moments riches (un par page maximum, règle `design-taste-frontend`) | Va à l'essentiel : titre, preuve, CTA |
| **`prefers-reduced-motion`** | Respecté partout : aucune animation hors chargement (règle déjà en place dans le PWA, 13 nov. 2026) |

Un seul design system (tokens de `design-prelakay.md` v1.1), un hero avec entrée animée, un ou deux moments dédiés par page (jamais plus) — pas de dégradés violets, pas de glassmorphism, pas de bento grid générique (`charles-unslop`).

## 2. Pages

| Route | Rôle | Source de contenu |
| --- | --- | --- |
| `/` (Home) | Proposition de valeur, les 4 atouts (retrait, PrelakayPay, livraison, carte des stores — repris du README), captures d'écran, preuve sociale dès qu'elle existe (témoignages Supabase, Phase 11bis) | Statique + témoignages dynamiques plus tard |
| `/blog` + `/blog/[slug]` | Articles (histoire du projet, guides stores, actualités pilote Les Cayes) | Voir §4 |
| `/partenaires/paiement` | Devenir partenaire de paiement | Reprend `components/proto/landing.tsx` et `data/faq/payment-partner-faq.json` du PWA (même structure mini-landing) |
| `/partenaires/livraison` | Devenir partenaire de livraison | Idem, `delivery-partner-faq.json` |
| `/ambassadeurs` | Devenir ambassadeur | Idem, `ambassador-faq.json`, `data/universites.json` |
| `/ouvrir-un-commerce` | Convaincre un commerçant, un seul CTA | **Redirige vers** `https://app.prelakay.com/fr/login` (⚠️ à confirmer avec le flux d'auth : faut-il un paramètre, ex. `?next=/fr/seller`, pour renvoyer vers l'espace vendeur après connexion ? question pour SAGA) |
| `/support` (Aide) | FAQ publique courte + lien vers le Centre d'aide du PWA (`app.prelakay.com/aide`) pour les questions de compte | `data/faq/buyer-faq.json` (extrait) |
| `/documentation` | Documents publics (guides, API future, presse) | `data/documentation.json`, **même format que** `data/legal/documents.json` du PWA : un slug vide affiche « en préparation » |
| `/marque` (Branding) | Logos et éléments de marque téléchargeables | Voir §5 |
| `/mentions`, `/confidentialite`, `/conditions` | Légal, **dans le pied de page de chaque page** | `data/legal/documents.json` repris tel quel (même source que le PWA, à synchroniser à la main tant qu'il n'y a qu'un seul texte validé) |

Pied de page commun à toutes les pages : liens légaux, réseaux (`data/social.json`), lien Documentation, lien Marque, copyright.

## 3. SEO, robots et analytics

- **Ouvert aux robots partout** (à l'inverse du PWA et de l'admin) : `robots.txt` avec `allow: "/"`, aucune page `noindex`. S'inspirer de `lib/config/robots.ts` du PWA pour la structure, pas pour le contenu (ici tout est indexable).
- `sitemap.xml` généré (pages statiques + articles de blog).
- Metadata par page (title, description, Open Graph, Twitter Card) — image OG dédiée par article de blog comme pour les fiches produit du PWA (`04-trd.md`, images OG déjà faites pour produit/store).
- Données structurées : `Organization` (toutes les pages), `FAQPage` sur `/support` et les pages partenaires, `Article` sur le blog.
- Analytics : à choisir avec SAGA (règle 5, aucune dépendance sans validation) — un outil respectueux de la vie privée (ex. Plausible/Umami auto-hébergé) plutôt qu'un script tiers lourd, cohérent avec le principe « un outil par besoin, gratuit autant que possible » du TRD.

## 4. Blog

Pas de CMS externe (règle 5 : pas de nouvelle dépendance sans accord). Deux options, à trancher avec SAGA :

1. **JSON par article**, même esprit que `data/legal/documents.json` (un fichier, un rendu simple) — le plus cohérent avec le reste du projet, mais limité pour du texte long et riche.
2. **MDX** (contenu + composants) — plus confortable à écrire, mais **nouvelle dépendance** (`@next/mdx` ou équivalent), à valider explicitement avant d'installer quoi que ce soit.

Recommandation : commencer en JSON (option 1), comme le fait déjà `data/faq/`, et ne passer à MDX que si le besoin éditorial le justifie.

## 5. Page Marque (`/marque`)

- Logos en SVG et PNG (fond transparent), variantes lagon / blanc / noir (déjà produites dans `_README/logo/` de ce dépôt, à transférer dans le dépôt landing).
- **Attribution obligatoire affichée à côté de chaque téléchargement** : texte court à copier-coller (« Logo Prélakay, utilisé avec attribution — prelakay.com ») plus un lien vers des règles d'usage (ce qu'on peut faire — mentionner Prélakay dans la presse, un article, un partenariat — et ce qu'on ne peut pas — modifier le logo, l'utiliser comme son propre logo).
- ⚠️ Licence de la police Surgena et des formes 3D (Squiggle/clay) **à confirmer** avant republication publique de ces éléments sur une page de marque (déjà noté `[À CONFIRMER]` dans `CLAUDE.md`, crédits).

## 6. Stack technique

Même famille que le PWA pour rester dans une seule compétence d'équipe : **Next.js** (export statique dès que possible, pages blog en génération statique). Pas de nouvelle techno à apprendre, pas de nouvelle dépendance à valider pour le cœur du site. Les ajouts (analytics, éventuel MDX) passent par la règle 5.

## 7. Étapes (une à la fois, vérifiable au navigateur — règle 3)

1. Squelette Next.js du dépôt `Prelakay-landing`, design tokens, pied de page commun, `robots.txt` + `sitemap.xml` minimal.
2. Home (hero + 4 atouts + captures), sans témoignages dynamiques.
3. Pages partenaires + ambassadeurs (reprise des mini-landings du PWA).
4. `/ouvrir-un-commerce` (redirection confirmée avec SAGA).
5. `/documentation` et `/marque`.
6. `/support` (FAQ publique).
7. Blog : structure + 1 article de test.
8. SEO (sitemap complet, données structurées, OG images) + analytics.
9. Témoignages dynamiques (Phase 11bis, une fois Supabase branché côté PWA).

## 8. Images et icônes

- **Photos** : Unsplash (licence libre), comme déjà fait pour les pages partenaires du PWA — jamais sur un produit, uniquement sur les écrans « vitrine » (`lib/data/mock/partnerImages.ts` donne le ton).
- **Icônes** : **BoxIcons** (`@boxicons/core`/`@boxicons/react`), décision du 21 nov. 2026 pour toute la production — à utiliser dès le départ sur la landing plutôt que Font Awesome.
- **Illustrations 3D** : Fluent Emoji (Microsoft, licence MIT) — mêmes fichiers que `public/illustrations/` du PWA.
- **Logo** : `_README/logo/` de ce dépôt (source), à transférer dans le dépôt landing.

## 9. Questions ouvertes pour SAGA

- Redirection « Ouvrir un commerce » : vers `/fr/login` seul, ou avec un paramètre qui renvoie ensuite à l'espace vendeur ?
- Blog : JSON (simple, cohérent) ou MDX (plus riche, nouvelle dépendance) ?
- Analytics : quel outil (respectueux de la vie privée, auto-hébergeable si possible) ?
- Licence Surgena / packs 3D : confirmée avant de les rendre téléchargeables sur `/marque` ?
- Blog, page Marque, page Documentation, `/ouvrir-un-commerce` : à ajouter formellement au PRD (`01-prd.md` §landing) avant le code, comme l'exige la règle 1.
