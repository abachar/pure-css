# Pure CSS

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

##### :after et :before

- **:after** Permet d'inserer du contenue apres un element
- **:before** Permet d'inserer du contenue avant un element

##### :checked

Cette pseudo-classe ciblera un element si il est coché, exemple : button radio, ou case à cocher

##### element + element

**Sélecteur adjacent** Permet de cibler un element qui est *immédiatement* précédé par le premier élément ciblé

##### element ~ element

Comme le sélecteur adjacent mais moins strict, alors qu'un sélecteur adjacent ne cible que le premier élément immédiatement précédé du premier sélecteur, celui-ci a une portée plus générale. Il sélectionne en effet n'importe quel élément du moment qu'ils suivent le premier sélecteur.

### Les Transitions

### Compatibilité

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
