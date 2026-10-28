# Portfolio de Resia Djonga

Portfolio React bilingue (français / anglais), développé avec Vite et Tailwind CSS.

## Lancer en local

```sh
npm install
npm run dev
```

Vite affiche l’adresse locale dans le terminal. Les pages disponibles sont `/`, `/apropos`, `/competences` et `/contact`.

## Défi personnel : thèmes clair et sombre

Le thème clair et le thème sombre sont gérés dans le code avec Tailwind (`dark:`). Le choix est conservé dans le navigateur. Les couleurs et contrastes ont été définis pour rester lisibles dans les deux modes.

Les transitions restent limitées aux interactions de l’interface. La règle `prefers-reduced-motion` désactive les mouvements lorsque le système de la personne demande une réduction des animations.

## Compétences front-end

La section Front-end présente les technologies nommées dans le retour de formation : React, Next.js, Vue.js, Nuxt.js, Tailwind CSS et Bootstrap, ainsi que JavaScript, HTML et CSS. La liste pourra être complétée avec les autres frameworks abordés en session dès que leurs noms seront confirmés.

## Fidélité à la maquette et écarts connus

| Élément | Écart | Raison |
| --- | --- | --- |
| Navigation | Les sections sont accessibles par quatre routes dédiées au lieu d’une seule longue page. | Les pages Accueil, À propos, Compétences et Contact ont été demandées pour le passage au code. |
| Projets | La section Projets de la maquette n’est pas encore une page du site. | Le périmètre confirmé pour cette version contient quatre pages. |
| Présentation | Le contenu a été adapté en français et anglais et certaines descriptions ont été réécrites. | Les deux langues et des pages autonomes nécessitent du contenu dédié. |
| Animations | Les effets décoratifs de la maquette ne sont pas tous repris ; les transitions sont discrètes. | Préserver la fluidité, notamment sur téléphone, et respecter la préférence de réduction des mouvements. |

La maquette de référence utilise Manrope, DM Mono, Playfair Display, un accent bleu et des fonds bleu nuit / bleu clair. Les styles du site reprennent maintenant cette palette et ces polices.

## Vérification et publication

Vérifications effectuées : `npm run build` et `npm run lint`.

