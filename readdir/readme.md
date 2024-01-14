## Voici des exemples pour les deux méthodes, `fs.readdir()` et `fs.readdirSync()`, qui illustrent la différence entre le blocage et la non-blocage du code :

### readdirSync:
readdirSync est une méthode synchrone qui bloque l'exécution du code jusqu'à ce que la lecture du répertoire soit terminée. Cela signifie que le code suivant ne sera exécuté qu'après que toutes les entrées du répertoire aient été lues.

```Javascript
const fs = require('fs');

try {
  // Lire de manière synchrone le contenu d'un répertoire
  const files = fs.readdirSync('./mon-repertoire');

  // Afficher la liste des fichiers
  console.log('Fichiers dans le répertoire :', files);

  // Traiter chaque fichier
  files.forEach(file => {
    console.log('Traitement du fichier :', file);
    // Ajoutez votre logique de traitement de fichier ici
  });
} catch (err) {
  console.error('Erreur lors de la lecture du répertoire :', err);
}
```

### readdir:
readdir est une méthode asynchrone qui prend un callback en argument. Elle ne bloque pas l'exécution du code, ce qui permet au reste du programme de continuer à s'exécuter pendant que la lecture du répertoire est en cours. Le callback est ensuite appelé une fois que la lecture est terminée.


```javascript
// Asynchronously read the contents of a directory
const fs = require('fs');

// Lire de manière asynchrone le contenu d'un répertoire
fs.readdir('./mon-repertoire', (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du répertoire :', err);
    return;
  }

  // Afficher la liste des fichiers
  console.log('Fichiers dans le répertoire :', files);

  // Traiter chaque fichier
  files.forEach(file => {
    console.log('Traitement du fichier :', file);
    // Ajoutez votre logique de traitement de fichier ici
  });
});
```
### Différence principale:

`readdirSync` est synchrone et bloque l'exécution du code jusqu'à ce que la lecture du répertoire soit terminée. Elle peut être plus simple à utiliser dans certains cas, mais elle peut également entraîner un blocage du programme si le répertoire est volumineux ou s'il y a des opérations intensives à effectuer sur chaque fichier.

`readdir` est asynchrone et utilise un callback pour gérer le résultat. Elle est recommandée pour les opérations qui peuvent prendre du temps, car elle n'interrompt pas le flux d'exécution du programme. Cela peut être plus efficace dans les applications en temps réel.