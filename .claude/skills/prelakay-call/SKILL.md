---
name: prelakay-call
description: "Point d'entrée unique de SAGA pour tout travail sur Prélakay : lit la demande, choisit et charge les bons skills installés (prelakay-ui, impeccable, charles-*, emil-design-eng, design-taste-frontend, animate, choreograph, gestures, mobile-native, break-ui, review-animations, ui-ux-pro-max, mobile-app-ui-design, vercel-*, superpowers…), dans le bon ordre, puis vérifie. À lancer au début d'une passe d'UI, d'une refonte, d'une page, d'une animation, d'une revue ou d'un correctif. Se déclenche sur : /prelakay-call, « utilise tous les skills », « fais une passe complète », refonte, landing, mini landing, immersif, polish, unslop, animation, mobile, revue."
---

# prelakay-call — quels skills, quand, comment

SAGA lance ce skill ; il appelle les autres. Il ne remplace ni `CLAUDE.md` (qui prime) ni les
skills qu'il charge : il décide **lesquels** charger, **dans quel ordre**, et **ce qu'on en garde**.

## 0. Toujours, avant de toucher un écran

1. Lire les « Décisions récentes » de `CLAUDE.md` (ce qui est tranché, ce qui est ouvert).
2. Charger **`prelakay-ui`** : images plutôt qu'icônes seules, dégradés de la palette, Fluent 3D,
   Storyset « Bro », dessins en CSS, une ligne par libellé, pas de titre en double, survol limité
   aux souris, zones tactiles de 44 px, `data/` pour tout contenu éditable, FAQ dans `data/faq/`.
3. Lancer une fois `impeccable context` (`.claude/skills/impeccable/scripts/impeccable.cmd context`
   sous Windows) : il charge `PRODUCT.md` et la règle de qualité.
4. Si la demande est grosse (nouvelle page, refonte, fonctionnalité) : au plus 3 questions ciblées
   (règle 8 de `CLAUDE.md`), sinon avancer.

## 1. Choisir les skills selon la demande

| La demande | Charger, dans cet ordre | À en retenir |
|---|---|---|
| **Écran qui « fait IA », générique, trop chargé** | `charles-unslop` → `impeccable` (critique, puis distill/quieter) → `design-taste-frontend` | audit des signes, direction en 5 lignes, **soustraire d'abord**, un seul moment fort |
| **Écran correct mais « pas fini »** | `charles-polish` → `emil-design-eng` → `impeccable polish` | états vides/erreur/succès, détails invisibles, mesure au pixel |
| **Page vitrine, mini landing, « immersif »** (partenaires, ambassadeurs, Prélakay+) | `impeccable` (mode Persuade, `reference/new-work.md`) → `design-taste-frontend` → `frontend-design` → `charles-unslop` (moment) → `choreograph` | une idée par page, l'image ou l'illustration porte la page, un seul appel à l'action répété |
| **Nouvel écran d'app mobile** | `mobile-app-ui-design` → `mobile-native` → `prelakay-ui` §1 bis (gabarits AliExpress) | structure de l'app AliExpress, barre du haut, feuilles du bas, 360 px |
| **Ajouter du mouvement** | `animate` (une animation) ou `choreograph` (plusieurs ensemble) → `charles-ux-animation` → `animation-performance` | doit-elle bouger ? courbe, durée, interruption, `prefers-reduced-motion` |
| **Revoir le mouvement existant** | `review-animations` (signaler) → `find-animation-opportunities` (manques) → `remove-animations` (superflu) → `improve-animations` (plan) | approbation méritée, pas accordée |
| **Glisser, balayer, feuille du bas** | `gestures` → `apple-design` | suit le doigt 1:1, interruptible, élastique aux bords |
| **Nommer un effet (« le truc qui rebondit »)** | `animation-vocabulary` | le bon terme avant d'écrire du code |
| **Transitions toutes faites (badge, menu, échange d'icône)** | `transitions-dev` | valeurs CSS prêtes, à traduire dans nos tokens (`--ease-out`, `--t-menu`…) |
| **Casser l'UI avec des données extrêmes** | `break-ui` | noms très longs, zéro élément, gros nombres, à 360 px |
| **Accessibilité, conventions** | `web-design-guidelines` → `impeccable audit` | contraste, focus, libellés, clavier |
| **Couleurs, polices, palettes de référence** | `ui-ux-pro-max` | inspiration seulement : **la charte `design-prelakay.md` prime** |
| **Performance React / Next** | `vercel-react-best-practices` → `vercel-composition-patterns` → `vercel-react-view-transitions` | rendu serveur, mémoïsation, transitions de vue |
| **Bug, comportement inattendu** | `superpowers:systematic-debugging` | cause racine avant correctif |
| **Avant de dire « fini »** | `superpowers:verification-before-completion` | captures à 360 / 390 / 1280 px, `tsc`, `eslint`, `vitest` |
| **SAGA a corrigé plusieurs choses** | `learn-taste` | transformer ses corrections en règles dans `prelakay-ui` |
| **Plusieurs versions à comparer** | `prototype` (sur demande explicite) | variantes réelles, SAGA choisit |

## 2. Skills installés à ne pas utiliser ici (sauf demande)

- `animate-expo`, `write-swift` : application native (Expo, iOS) — hors du prototype web.
- `ask-sonner` : nos toasts sont **sileo** (validé le 10 nov. 2026), pas Sonner.
- `pick-ui-library` : **aucune nouvelle dépendance sans SAGA** (règle 5) ; ne sert qu'à préparer une question.
- `transitions-ui-generation` : effet « l'IA génère l'écran » — hors de notre ton.

## 3. Garde-fous qui priment sur tous les skills

- `CLAUDE.md` et `docs/design-prelakay.md` gagnent sur toute suggestion d'un skill (couleurs, polices, ton, vouvoiement).
- Ne jamais trancher un point ⚠️ ouvert ni inventer un chiffre (prix, commission, délai) pour « faire marketing » : un fait vérifiable, ou une phrase sans chiffre.
- Aucune nouvelle dépendance, aucun changement de base de données, aucune clé dans le code.
- Avant une réécriture large : la version précédente reste récupérable (git).
- Un skill qui propose Tailwind, shadcn, Sonner ou une autre police : traduire l'idée dans nos styles (`app/proto-next.css`, bloc daté).

## 4. Finir

1. Captures Playwright à 360, 390 et 1280 px, **regardées**.
2. `npx tsc --noEmit -p .`, `npx eslint <fichiers touchés>`, `npx vitest run` (une passe groupée).
3. Ajouter la décision datée dans `CLAUDE.md` ; une nouvelle règle d'UI va dans `prelakay-ui`.
4. Rien n'est commité sans demande de SAGA.
