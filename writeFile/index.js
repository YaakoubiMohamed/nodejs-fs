const fs = require('fs');

function appendFile(content, filePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function main() {
  try {
    const content = 'Some content to append';
    const newFile = 'new_file.txt';
    await appendFile(content, newFile);
    console.log('File appended successfully');
  } catch (err) {
    console.error('Error appending file:', err);
  }
}

main();