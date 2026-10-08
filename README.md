# React-Intro

## Introduction à React

React est une bibliothèque JavaScript qui permet de créer des interfaces utilisateur de manière simple, organisée et performante.

Contrairement au JavaScript classique qui est impératif (on explique comment faire), React est déclaratif :
on décrit ce que l’on veut afficher, et React s’occupe du reste.

Avec React, on crée des composants, qui ressemblent à du HTML mais sont en réalité des fonctions JavaScript.
Ces composants peuvent :

- Recevoir des données (props)
- Être réutilisés
- Être combinés entre eux pour construire des applications complètes

Dans cet exercice, tu vas apprendre à créer des **composants React simples avec des fonctions**.

En React, au début, le plus important est de savoir créer des fonctions qui retournent du JSX.



Dans cet exercice, tu vas apprendre à :

- Créer des composants React
- Afficher (render) des composants
- Utiliser JSX et ES6
- Passer des données avec les props
- Gérer des événements (comme les clics)




---

En React, un composant peut être simplement une **fonction** qui retourne du JSX :

```js
const App = () => {
  return <div>Hello React</div>;
};
```

---

## Partie 1 : Créer un composant simple


1. Crée un fichier `GroceryList.jsx` 
2. Crée un composant `GroceryList` n'oublie pas de exporter le composant
3. Ce composant doit retourner une liste (`<ul>`) avec **2 éléments (`<li>`)**
4. Ouvre le fichier App.jsx
5. Importe GroceryList et affiche le composant



## Partie 3 : Créer des composants réutilisables

1. Crée un fichier `GroceryListItem.jsx` 
2. Crée un composant `GroceryListItem`
3. Ce composant doit afficher un seul `<li>`
4. Utilise ce composant dans `GroceryList`



## Partie 4 : Utiliser les props

1. Dans GroceryList.jsx, importe GroceryListItem
1. Modifie `GroceryListItem` pour recevoir des données avec **props**
2. Affiche ces données dans le `<li>`


## Partie 5 : Utiliser un tableau

1. Crée un tableau dans Grocerylist :

```js
const items = ["Pommes", "Bananes", "Fraises"];
```

2. Affiche les éléments avec `.map()`


## Partie 6 : Ajouter une interaction (bonus)


Quand on clique sur un élément, afficher dans la console :

```
"Item cliqué"
```

### Exemple

```js
   <li onClick={()=> console.log("clicked") }> </li>;
```

---
