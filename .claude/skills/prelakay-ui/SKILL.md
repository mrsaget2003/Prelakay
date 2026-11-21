---
name: prelakay-ui
description: "Règles visuelles de Prélakay validées par SAGA, à appliquer à CHAQUE travail d'interface sur ce repo : polish, unslop, refonte, nouvel écran, composant, page mobile ou desktop, revue d'UI, passe impeccable ou charles-*. Rappelle : images et illustrations plutôt qu'icônes seules, dégradés (linéaires, radiaux, mesh) dans la palette, illustrations 3D Fluent Emoji, libellés sur une seule ligne avec « … », pas de titre en double sous la barre mobile, échelle de texte, collisions de classes CSS, vérification en navigateur. Se déclenche sur : polish, UI, design, écran, page, mobile, desktop, accueil, compte, carte, grille, icônes, images, dégradé, gradient, illustration, unslop, refonte, AliExpress."
---

# Prélakay — règles d'interface (SAGA, 17 nov. 2026)

SAGA ne veut pas avoir à les redire. Elles complètent `CLAUDE.md` (qui prime) et `docs/design-prelakay.md` (couleurs, polices, ton). Lire aussi les « Décisions récentes » de `CLAUDE.md` avant de toucher un écran.

## 1. Plus d'images, de dégradés ; moins d'icônes seules

L'écart avec AliExpress vient surtout de là : leurs écrans sont riches en images et en couleurs, les nôtres étaient des aplats + icônes.

- **Avant de poser une icône seule dans une tuile, une carte ou une grille de services**, se demander si une image ferait mieux : photo produit (`productImage`), photo de scène, ou illustration 3D, ou illustration pris soit sur icons8 ou autres services tierces.
- **Illustrations 3D : Fluent Emoji (Microsoft, MIT)**, servies en local depuis `public/illustrations/` (jamais en lien distant). Source : `https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/<Nom>/3D/<nom>_3d.png` (espaces encodés `%20`, nom de fichier en minuscules avec `_`). Les télécharger dans un dossier temporaire neuf, **les regarder** avant de choisir (ex. la boutique « 24 H » laisserait croire à des stores ouverts jour et nuit : refusée), copier avec un nom français clair, garder le crédit dans `lib/data/credits.ts`.
- **Photos** : Unsplash n'est pas la seule banque. Pexels et Pixabay (licences libres) sont possibles ; choisir chaque photo en la regardant, jamais sur le seul texte alternatif. Pas de photo de scène sur le catalogue produit.
- **Dégradés** (revient sur « dégradés → aplats » du 13 nov.) : linéaires, radiaux, mesh (plusieurs `radial-gradient` superposés), **dans la palette** : lagon-100 / 300 / 500 / 700 / 900, blanc cassé, et l'or `#f6e7b4` réservé à Prélakay+ et aux Coins (famille or/ambre de la page Coins, comme chez AliExpress). Exemples en place : carte Prélakay+ (`.plusc`), carte wallet (`.stathero`), « Offre du jour » (`.odj-p`), « Sélection mode » (`.abc-hero`). Pas de texte en dégradé.
- Une pastille posée sur une photo doit être **pleine** (fond plein), sinon elle disparaît.

### Illustrations Storyset « Bro » (18 nov. 2026)

- 88 illustrations en SVG + PNG dans `public/illustrations/storyset/bro/`, couleur `#0E6B74` (lagon-500). **Toujours le SVG** (16 à 44 Ko, net partout) ; le PNG (jusqu'à 700 Ko) seulement si un outil exige un bitmap.
- Catalogue unique : `lib/ui/illustrations.ts` (une clé = un usage : `emptyCart`, `notFound`, `sellerOrders`…). Composant : `<Illus name="…" />` (`components/ui/Illus.tsx`) ; état vide : `<EmptyBox illus="…" />`. Ajouter une illustration = une ligne au catalogue, jamais un chemin en dur dans une page.
- **Où** : écrans vides, erreurs (404, 403, hors ligne), pages d'aide, invitations, accueil et pages creuses de l'espace vendeur, bandeaux d'explication. **Pas** sur le catalogue produit, ni plusieurs fois sur un même écran, ni en remplacement d'une photo de produit ou de store.
- **Pièces Coins** : la pièce dessinée `.coin` (or + étoile, `app/proto-next.css`), jamais les pièces 3D `public/illustrations/coins_3D/` (elles portent un « $ »).
- **Avatars** : les 30 avatars fournis par SAGA (`public/images/avatar/3D Avatars/<n>.png`, PNG 120 px ; les SVG pèsent jusqu'à 2 Mo) via `lib/hooks/useAvatar.ts` et `<UserAvatar />`.
- **Écartées** : celles qui montrent un « $ » (Coins, Credit card, Finance, Make it rain, Cash Payment : les Coins et le wallet ne sont pas des dollars), les enfants masqués (époque COVID), la colère, le sport, la nature hors sujet.
- Taille : 160 à 200 px dans un état vide ; 120 à 140 px dans un bandeau ; jamais étirée (`.illus` garde ses proportions).
- Photos de scène (Unsplash) : seulement les bandeaux d'identité (connexion, inscription, Enregistrer son commerce). Tout le reste des écrans vides et des erreurs = illustration.

### Formes 3D en filigrane (19 nov. 2026)

- Packs de SAGA `public/illustrations/Squiggle_3D/` et `shape-clay_3D/` (bleu-violet, gris, ≈ 1 Mo chacun, **non versionnés**) : jamais servis tels quels. `node scripts/deco-tint.mjs` les teinte en lagon ou en or **en gardant le relief** et écrit des WebP de 10 à 40 Ko dans `public/illustrations/deco/` ; ajouter une forme = une ligne dans la liste du script.
- Usage : **sous** une photo (filigrane qui dépasse d'un coin), en débord entre deux sections, ou très atténuées (opacité 0,14 à 0,2) sur une bande lagon sombre. Composant `<DecoShape />` (`components/proto/landing.tsx`) : `aria-hidden`, sans clic, jamais sur du texte (sur mobile, la placer sur la photo).
- Le conteneur qui les reçoit coupe le débordement horizontal (`overflow-x: clip`, qui ne casse pas un `position: sticky`).
- Écartées : les mains (manchettes violettes, et changer leur teinte abîme la peau).
- Gabarit des pages vitrines : voir **§ 1 ter** (validé par SAGA le 19 nov. 2026).

### Dessins en CSS (18 nov. 2026, SAGA : « à garder pour d'autres usages »)

Quand il manque une image et qu'un objet simple suffit (pièce, badge, ticket, sceau, pastille de statut), le **dessiner en CSS** plutôt que chercher une illustration ou poser une icône seule. Exemple en place : la pièce Coins.

- **Où** : `app/art.css` (une section par objet, commentée) + un composant dans `components/art/` (`<Coin />`, `<Coin big />`, `<CoinPile />`). Réutiliser avant de redessiner.
- **Recette** : un disque ou une forme en `border-radius` ; un `radial-gradient` décentré (reflet clair en haut à gauche → teinte → ombre) pour le volume ; **une** ombre portée douce teintée de la couleur de l'objet (jamais d'ombre intérieure en bordure : le contrôle impeccable la prend pour une bordure latérale) ; un symbole Font Awesome au centre dont la taille suit `font-size`.
- **Composition** : plusieurs objets en `position:absolute` avec tailles et angles différents (`rotate`) pour donner du mouvement (le tas de pièces de l'en-tête Coins).
- **Couleurs** : palette uniquement (famille lagon ; or/ambre pour les Coins et Prélakay+). Pas de symbole monétaire (« $ ») sur une pièce.
- **Taille** : nette de 16 à 120 px ; tailles mobile dans un `@media (max-width:767px)` du même bloc.
- Toujours `aria-hidden` : le nombre ou le texte voisin porte le sens.

## 0. Données éditables

Tout fichier de données modifiable par SAGA vit dans `data/` (JSON avec une clé `_lisezmoi` qui explique le format) : `social.json`, `universites.json`, `geo/sud-communes.json`, `legal/credits.json`, `legal/documents.json`, et **toutes les FAQ dans `data/faq/`** (`buyer`, `seller-space`, `payment-partner`, `delivery-partner`, `ambassador`). Une page trop chargée envoie ses détails (profils, objections, engagements, chiffres secondaires) dans sa FAQ ; une FAQ s'affiche toujours avec `components/proto/faq.tsx` (`FaqThemes`, `FaqSheet`, `FaqRow`), jamais avec un `<details>` écrit à la main. Un chiffre qui vit dans le code s'écrit en variable (`{COINS}`). Le code les charge et les type (`lib/data/project.ts`, `lib/data/credits.ts`) ; jamais de contenu éditable écrit en dur dans un `.ts`.

## 1 bis. Gabarits par type de page (captures `prototype/FIX/templates/`, app AliExpress)

À reprendre en structure, avec nos couleurs, nos mots et nos règles (pas de prix en $, pas de « Choice », « SuperDeals », jeux ni rouge AliExpress).

- **Haut d'écran de sous-page** : flèche retour, titre à gauche ou centré, 1 à 3 icônes à droite (recherche, partage, réglages). Pas de titre répété dessous.
- **Accueil** (`home-2/3`, `home-apres-defilement`) : au défilement, les catégories deviennent des **onglets collants** sous la recherche, avec les sous-catégories en puces.
- **Liste groupée** (paramètres, profil : `settings-1/2`, `profile-details`) : rangées pleine largeur de 56-64 px, libellé à gauche, valeur grise à droite, groupes séparés par une bande grise ; action destructive (Se déconnecter) en bas, seule.
- **Cartes coupon** (`coupons-pages`, `profile-pages`) : montant en très grand, minimum dessous, code, bouton « Utiliser » en pastille ; puces de filtre en haut ; barre du bas Historique / Obtenir plus / Règles.
- **Commandes** (`order-pages`) : recherche, onglets de statut défilants, une carte par store (statut + date, produit, total, « Laisser un avis = +Coins », actions en pastilles à droite).
- **Panier** (`panier-3/5/6`, `recapitulation-panier`) : groupes par store, bloc « Indisponibles » en miniatures, « Paiements sûrs », « Plus à découvrir » ; récapitulatif = feuille du bas avec miniatures puis lignes de calcul.
- **Fiche produit** (`fiche-produits`) : photo pleine largeur + compteur, bande de miniatures, titre 2 lignes, note · vendus, encadré prix (prix, ancien prix, coupons du store).
- **Wishlist** (`wishlist-*`, `add-in-wishlist`) : onglets Tous / Mes listes ; ligne article = photo, nom 2 lignes, baisse de prix depuis l'ajout, « Ajouter au panier » ; listes avec partage ; après le cœur, feuille « Ajouté · Ajouter à une autre liste ».
- **Stores suivis** (`followed-store-page`) : « Découvrir d'autres stores » en cartes défilantes, puis par store : logo, nom, note · abonnés, « Visiter », 3 produits.
- **Feuilles du bas** (adresse `press-pastille-addresse`, wishlist, récapitulatif) : titre + croix, liste de choix avec la sélection cochée, actions en bas (principale pleine, secondaire grise).
- **Page d'abonnement** (`prelakay-plus-*`) : bandeau coloré, paquet de coupons en cartes, produits à prix réduit, bouton d'adhésion collé en bas.
- **Suggestion** (`suggestion-page`) : encadré gris d'explication, titre, bouton principal, liste des suggestions envoyées (vide = illustration).
- **Espace vendeur** : structure Seller Center AliExpress ; mêmes règles (illustrations Bro sur les pages creuses, dégradés de la palette sur les cartes de chiffres, une ligne par libellé).

## 1 ter. Mini landing pages (validé par SAGA le 19 nov. 2026 : « nickel »)

Modèle : `/partenaires/paiement`, `/partenaires/livraison`, `/ambassadeurs` — composants de `components/proto/landing.tsx`, styles `.mlp-*` (`app/proto-next.css`). À réutiliser pour toute page vitrine (Prélakay+, devenir vendeur, programme futur), jamais à recopier à la main.

**Ordre des sections — une idée chacune, l'image porte la page :**
1. `LandingHero` : photo plein cadre (Unsplash, choisie en la regardant), voile lagon côté texte (gauche sur bureau, bas sur mobile), titre 52 px / 34 px, une phrase de promesse, **un** bouton clair « verbe + objet » qui descend à `#candidature`, deux réassurances cochées. Une forme 3D déborde du bandeau sur la section suivante.
2. `LandingWhy` : 3 ou 4 avantages en liste numérotée `01 02 03` (chiffres lagon, police de titre), **une phrase** chacun ; à côté, une photo 4:5 arrondie posée sur une forme 3D en filigrane qui dépasse d'un coin.
3. `LandingSteps` : les étapes (+ « Ce qu'il faut fournir » si besoin) sur une **bande lagon sombre** en dégradé mesh, frise numérotée, deux formes d'argile atténuées (opacité 0,14 à 0,2) aux coins.
4. `LandingFaq` : la FAQ de la page (`data/faq/<page>-faq.json`) **empilée sur une colonne** ; de l'autre côté, une illustration Storyset collée au défilement (`position: sticky`), posée sur une forme 3D. Tout ce qui chargeait la page (profils, objections, engagements, gains détaillés) vit ici.
5. `LandingApply` : le formulaire dans un panneau centré (880 px max), une forme dorée sur son coin, le contact en dessous.

**Illustrations et images :**
- Une photo par usage (bandeau, « Pourquoi »), jamais deux fois la même ; une **illustration Storyset** pour la FAQ, choisie par sujet et sans « $ » (paiement = `partnerPayment` « Connecting teams », livraison = `delivery`, ambassadeurs = `ambassadors`).
- Formes 3D teintées (`public/illustrations/deco/`, voir « Formes 3D en filigrane ») : sous une photo, en débord entre sections, atténuées sur la bande sombre. Jamais sur du texte, jamais cliquables.
- **Aucun compteur** sans vrai chiffre vérifiable (« Wallet », « Haïti + diaspora » ne sont pas des chiffres) : on retire plutôt que d'inventer.
- Rien ne s'anime à l'arrivée ; seuls le survol (souris) et l'appui répondent (la flèche du bouton glisse de 3 px).

**Responsive (SAGA : « très cool », à garder pour toutes les pages générées) :**
- **Bureau (≥ 1024 px)** : bandeau arrondi (24 px) dans la grille, sections en deux colonnes (texte 1,1 / image 0,9 ; FAQ 1,3 / illustration 0,7), étapes en 4 colonnes reliées par un trait.
- **Tablette et mobile (< 1024 px)** : une seule colonne ; bandeau **bord à bord** à 78 svh, sans arrondi, texte en bas sur le voile ; bouton principal pleine largeur (exception admise : c'est l'action de la page) ; bande des étapes bord à bord en frise **verticale** (numéros à gauche) ; l'illustration de la FAQ passe **au-dessus** des questions, réduite (220 px), sans `sticky` ; la photo de « Pourquoi » à 86 % de la largeur, centrée.
- Bord à bord = marge négative `calc(-1 * var(--margin))` ; le conteneur `.mlp` coupe le débordement horizontal (`overflow-x: clip`) : vérifier `scrollWidth == largeur d'écran` à 390 et 1280 px.
- Espacement vertical généreux et régulier : 96–104 px entre sections sur bureau, 72 px sur mobile ; titres de section 36 px / 28 px, `text-wrap: balance`.

## 2. Texte

- **Libellés sous icônes (grilles, raccourcis, services) : une seule ligne.** Envelopper le texte dans `<span className="ell">` (« … » si ça ne tient pas) et rendre les colonnes rétrécissables : `grid-template-columns: repeat(n, minmax(0, 1fr))`, items `min-width: 0`. Si le « … » mange le sens (« Prêtes pou… »), **raccourcir le libellé** façon AliExpress (« À retirer », « Historique », « Inviter ») et garder le nom complet en `aria-label`.
- **Échelle** : pastilles du haut 32 px de haut et texte 12 px ; libellés sous icônes 12 px ; icônes de grille 20-22 px ; titres de section 20 px sur mobile. Vérifier qu'aucun texte ne passe à la ligne là où il ne devrait pas, à 360 px.
- Français, vouvoiement. Rien d'inventé (chiffres, avantages, avis) : ce qui n'est pas décidé va dans `docs/openQuestions.md`.

## 3. Mobile

- **Aucun titre en double** : si la barre du haut (`MTop`) affiche le titre, la page ne le répète pas → classe `m-sr` (masqué à l'écran, lu par les lecteurs d'écran). Pas de lien « ‹ Retour » dans la page. Pages à bannière d'identité (store, ambassadeurs) : c'est la barre qui ne répète pas.
  - Desktop (pas de `MTop`) : le même `<h1 className="m-sr">` sert de titre visible, dans une rangée `titre + action` (ex. `.evp-h` sur Events) ; jamais un second `<h1>` réservé au desktop.
- **Actions de la barre du haut (mobile)** : à droite du titre, une ou deux icônes au plus (`<span className="mt-acts">`), seulement pour une action **qui existe déjà** sur la page ou dans le produit. Branchées dans `MTop` (`components/proto/shell.tsx`). En place : panier = poubelle (retire les articles cochés, confirmé) + partager ; centre de messages = tout lire + réglages ; fil d'un store = visiter le store ; Events = historique (`/events?vue=passes`) ; détail de commande = support ; Retours = centre d'aide ; store = chercher dans le store. Sur desktop, la même action vit dans la page (bouton texte).
- Mobile = l'app AliExpress du Play Store (captures dans `prototype/FIX/`) ; desktop = le site AliExpress. Tablette = desktop pour l'instant.
- Cibles tactiles ≥ 44 px, `:focus-visible` lagon, `prefers-reduced-motion` respecté, rien ne s'anime au premier affichage.
  - Petite icône : agrandir la zone par un `::after` centré (`width/height: max(100%,44px)`), jamais le dessin ; deux zones ne se chevauchent pas. **Ne pas** mettre `position:relative` sur un élément déjà en `position:absolute` (cœur et panier des cartes : régression du 19 nov.).
  - **Survol** : toute règle `:hover` dans `@media (hover:hover) and (pointer:fine)` (sinon il reste collé après un toucher). Ce qui doit rester visible sans survol (cœur des cartes) a sa règle `@media (hover:none)`.
  - **Appui** : `scale(.96)` sur les petits contrôles (jamais sous 0,95), changement de fond sur les rangées et cartes larges. Onglets : sélection par la couleur et le trait, jamais par la graisse.
  - Montants : `tabular-nums` (classe `.tnum` ou `.price`), `<Money />` pour un montant qui change.
- Pas de bouton pleine largeur hors barre d'action fixe.

## 4. CSS

- Avant de créer une classe, **vérifier qu'elle n'existe pas** : `grep -nE "\.<classe>([^a-zA-Z0-9_-]|$)" app/*.css`. (`.nf` était la page 404, `.nv` une infobulle de graphique : deux collisions le 17 nov.)
- Nouveaux styles en fin de `app/proto-next.css`, dans un bloc daté et commenté (le pourquoi, pas le quoi).
- Liens et navigation : `import Link from "@/components/i18n/Link"` et `@/lib/i18n/navigation` (jamais `next/link` ni `next/navigation`), sinon l'adresse perd `/fr` (FIX #5).
- Pas de Tailwind, pas de shadcn, pas de nouvelle dépendance sans SAGA. Icônes : Font Awesome via `lib/icons/registry.ts` (ajouter l'icône au registre depuis les paquets déjà installés).

## 5. Vérifier avant de dire « fini »

- Captures Playwright (script dans le dossier temporaire de la session) à **360 et 390 px** en mobile (`isMobile`, `hasTouch`) et **1280 px** en desktop, puis les **regarder**.
- Pour les doublons ou les manques sur beaucoup de pages, un **audit mécanique** sur `ALL-LINKS.md` plutôt que des sélecteurs devinés.
- L'état de démo est dans `localStorage` (`pk-demo-v1`) : pour tester un panier ou des notifications, l'écrire directement, et le vider pour revoir les données de démo.
- Une seule passe `tsc --noEmit` + `eslint` sur les fichiers touchés à la fin du lot (SAGA préfère une vérification groupée).
