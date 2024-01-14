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


