# Skills à invoquer pour la landing page

Un skill par étape, dans cet ordre. Chacun se lance avec l'outil `Skill` (ou `/nom` en session interactive).

## 1. Cadrage (avant toute maquette)

| Skill | Pourquoi |
| --- | --- |
| `superpowers:brainstorming` | Cadrer la landing avant de construire — obligatoire avant tout travail créatif (règle du projet) |
| `marketing:competitive-brief` | Positionnement face aux marketplaces de référence (AliExpress/Amazon/Shein — règle 7 du projet) et aux acteurs haïtiens existants |
| `brand-voice:generate-guidelines` | Figer un ton à partir de `docs/design-prelakay.md` v1.1 et du `README.md` — pour que la home, les pages partenaires et le blog parlent de la même voix |

## 2. Direction visuelle

| Skill | Pourquoi |
| --- | --- |
| `charles-hero-mockups` | Voir 2-3 directions du hero avant de coder quoi que ce soit |
| `design-taste-frontend` | Le skill anti-slop pour un site marketing : une voix propre, une image/scène par page, un ou deux moments dédiés — c'est le skill le plus proche de ce qui est demandé (immersif desktop, sobre mobile) |
| `frontend-design` | En complément, pour la direction typographique et les choix esthétiques fins |
| `prelakay-ui` | Les règles de marque déjà validées par SAGA (images plutôt qu'icônes seules, dégradés dans la palette, Fluent 3D, libellés sur une ligne) — à recharger à chaque écran |

## 3. Construction et polish

| Skill | Pourquoi |
| --- | --- |
| `charles-unslop` | Vérifier qu'aucun écran ne « sent » l'IA avant de polir |
| `charles-ux-animation` | Le scroll storytelling et le parallax desktop doivent être corrects image par image ; vérifie aussi que mobile reste sobre |
| `charles-polish` | Dernière passe : états, espacement, contraste |
| `charles-color-analysis` | Si une teinte détonne ou paraît fade une fois en place |
| `engineering:documentation` | Documenter le dépôt landing lui-même (README technique, variables d'environnement) |

## 4. SEO et contenu

| Skill | Pourquoi |
| --- | --- |
| `claude-seo:seo-technical` | Vérifie crawlabilité, indexation, Core Web Vitals une fois le site monté |
| `claude-seo:seo-schema` | Génère les données structurées (`Organization`, `FAQPage`, `Article`) |
| `claude-seo:seo-sitemap` | Sitemap XML (pages + blog) |
| `claude-seo:seo-sxo` | Vérifie que chaque page répond à l'intention de recherche qui doit l'amener (ex. « devenir partenaire livraison Haïti ») |
| `claude-blog:blog-strategy` | Les piliers de contenu du blog avant d'écrire le premier article |
| `claude-blog:blog-write` + `claude-blog:blog-seo-check` | Rédaction et vérification SEO de chaque article |
| `claude-blog:blog-image` | Images d'article (Unsplash ou génération) |

## 5. Lancement et suivi

| Skill | Pourquoi |
| --- | --- |
| `marketing:campaign-plan` | Plan de lancement une fois le site prêt (quand relancer les publicités, cf. `docs/06-plan.md` Phase 1) |
| `small-business:marketing-monday` | Point hebdomadaire une fois le site en ligne : ce qui marche, ce qui ne marche pas |
| `small-business:social-content-engine` | Décliner le contenu du blog et de la home en posts sociaux |

## Déjà utilisés (pour mémoire)

`charles-call` n'existe pas dans ce projet ; l'équivalent est `prelakay-call`, qui choisit lui-même les bons skills ci-dessus selon la demande — à invoquer en premier si une seule commande doit suffire.
