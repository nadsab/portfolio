Au début, j’avais tout dans un seul fichier App.jsx.
Ensuite, j’ai refactoré pour séparer les données du composant principal.
J’ai mis les textes multilingues, le profil, les skills et les projets dans un fichier portfolioData.js.
Comme ça, App.jsx gère surtout l’affichage et les états, ce qui rend le code plus lisible et plus maintenable.


<!--  🚩🚩 -->

J’ai créé de petits composants réutilisables pour éviter la répétition et améliorer l’organisation du code.

<!--  🚩🚩 -->

J’ai séparé l’écran d’introduction dans un composant spécifique, parce qu’il avait une responsabilité claire : afficher l’animation d’entrée et gérer sa fermeture.

<!--  🚩🚩 -->

J’ai isolé la fenêtre de détails du projet dans un composant dédié, parce qu’elle a une responsabilité claire : afficher les informations d’un projet sélectionné.

<!--  🚩🚩 -->

J’ai extrait la modal dans un composant dédié pour éviter d’avoir trop de JSX dans le composant principal. Comme ça, App.jsx garde surtout la logique de navigation et d’état.

<!--  🚩🚩 -->

J’ai extrait la navbar dans un composant séparé parce qu’elle est réutilisable dans sa structure et elle contient sa propre logique d’actions utilisateur : changement de langue, navigation interne et dark mode.

<!--  🚩🚩 css-->

J’ai déplacé les styles vers un fichier CSS dédié afin de séparer la logique React du style visuel et améliorer la lisibilité du code.

J’ai séparé les styles dans App.css pour éviter d’avoir du CSS inline dans React et rendre le code plus maintenable.

Encore mieux :

Cela permet aussi de réutiliser les styles dans plusieurs composants.
<!--  🚩🚩 -->

J’ai séparé les grandes sections de la page en composants dédiés pour clarifier la structure et réduire la taille du composant principal.

J’ai gardé App.jsx comme composant principal pour gérer les états globaux, puis j’ai séparé l’affichage en sous-composants comme HomeSection, ProjectsSection, Navbar, IntroScreen et ProjectModal.

<!--  🚩🚩 -->






