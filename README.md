# Mode d'emploi

## Ajouter un fichier pdf

Pour ajouter un fichier pdf au site.

- Ajouter le fichiers dans le dossier [/public/](/public/)
- Les noms de fichiers ne doivent contenir que des minuscules et des tirets. ~Cours sur Mérimée.pdf~ => cours-sur-merimee.pdf
- ajouter l'entrée `pdf: cours-sur-merimee` dans le frontmatter du post concerné

## Créer un post

Pour ajouter un post (article, cours ou livre): ajouter un fichier .md dans le dossier [/src/content/posts/](/src/content/posts/).
Le contenu est écrit à l'aide de la syntaxe [Markdown](https://www.markdownguide.org/cheat-sheet/). 

## Exemples

### Article

```md
---
tags: articles
category: Théorie
date: 2014-01-01
title: "Lukács: Les aventures de la pensée"
pdf: les-aventures-de-la-pensee
---

Contenu de l'article...
```

### Cours

```md
---
tags: cours
title: Baudelaire
date: 2009-01-01
description: "Cette entrée en matière est assez longue et elle pourra vous sembler parfois éloignée du sujet – je pense en particulier au développement sur la perspective et au développement sur Les Grotesques de Gautier, qui me semblent pourtant très utiles et même nécessaires."
pdf: BAUDELAIRE
---

Contenu du cours
```

### Livres

```md
---
tags: livres
title: "Le nadir de la grâce: essai sur la figure et la défiguration"
date: 2012-01-24
description: >-
  S'appuyant sur l'histoire, l'esthétique et la littérature, cet essai
  s'intéresse aux fondements de la position néoclassique de la grâce, et montre
  ses liens avec la mélancolie à partir de 1793 et jusqu'à l'apparition du
  cinéma.
---

Description du livre
```

## Frontmatter

Le frontmatter est définit au début du fichier entre les séparateur `---`.
Pour écrire une valeur sur plusieurs lignes vous pouvez utiliser le caractère `|` et précéder chacune des lignes par deux espaces.

Valeurs du frontmatter.

| Entrées     | Type de valeur                             | Fonction                                                  | Obligatoire | Types de post concernés |
| ----------- | ------------------------------------------ | --------------------------------------------------------- | ----------- | ----------------------- |
| tags        | `cours` ou `livres` ou `articles`          | Permet de définir dans quelle liste le post sera affichée | oui         | tous                    |
| title       | texte                                      | titre du projet                                           | oui         | tous                    |
| date        | date au format aaaa-mm-jj                  | 1993-01-09                                                | oui         | tous                    |
| pdf         | nom du fichier pdf sans l'extension ".pdf" | permet d'ajouter un lien vers un fichier pdf              | non         | tous                    |
| description | texte                                      | Résumé du post. Pour les livres et les cours.             | non         | livres et cours         |
| category    | catégorie du l'article                     | Permet de trier les articles par catégorie                | oui         | articles                |
