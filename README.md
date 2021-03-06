# Pure CSS

[Regarder la présentation ici](http://abachar.github.io/pure-css)

## CSS

Un langage qui permet de gérer la présentation d'une page Web, en définissant des règles appliquées à un ou plusieurs documents HTML (positionnement, alignement, font, couleurs...).
Il permet de séparer la structure d'un document HTML et sa présentation

- CSS 1: Des implémentations difficiles pendant la guerre des navigateurs.
- CSS 2: Des ambitions précipitées
- CSS 2.1: Retour aux implémentations
- CSS 3: Spécification modulaire
- CSS 4: L'écriture débute dès 2010

### Les Selecteurs

Chaque règle CSS commence nécessairement par un sélecteur,un sélecteur est un "nom" qui indique à quels éléments d'une page HTML on desire appliquer une règle.

#### element + element

**Sélecteur adjacent** Permet de cibler un element qui est *immédiatement* précédé par le premier élément ciblé

#### element ~ element

Comme le sélecteur adjacent mais moins strict, alors qu'un sélecteur adjacent ne cible que le premier élément immédiatement précédé du premier sélecteur, celui-ci a une portée plus générale. Il sélectionne en effet n'importe quel élément du moment qu'ils suivent le premier sélecteur.

#### :after et :before

- **:after** Permet d'inserer du contenue apres un element
- **:before** Permet d'inserer du contenue avant un element

#### :checked

Cette pseudo-classe ciblera un element si il est coché, exemple : button radio, ou case à cocher

### Les Transitions

Permet une transition douce entre l'ancienne valeur et la nouvelle valeur d'une propriété CSS lorsqu'un événement est déclenché via :

- Pseudo-classe :hover, :checked
- JavaScript

### Compatibilité

- Fonctionne parfaitement sur Chrome, Firefox, Safari et Opera 
- IE9 Pour les sélecteurs
- IE10 Pour les transitions

### Tools
- CodePen : http://www.codepen.io/
- ColorHexa : http://www.colorhexa.com/

## Exemples
- Toggle
- Collabse
- Accordion
- Slider
- Modal
- Mobile Menu
- Tabs
- Tooltip
- Spinner
