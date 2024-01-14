const fs = require('fs');

// Spécifiez le chemin du fichier que vous souhaitez lire
const cheminFichier = 'example.txt';

// Utilisez la fonction readFile pour lire le contenu du fichier de manière asynchrone
fs.readFile(cheminFichier, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }

  // Affichez le contenu du fichier
  console.log('Contenu du fichier :');
  console.log(data);
});

