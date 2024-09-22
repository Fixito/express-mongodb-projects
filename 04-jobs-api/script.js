import fs from 'node:fs';
import postmanToOpenApi from 'postman-to-openapi';

// Chemin vers votre fichier Postman exporté
const postmanCollection = './src/jobs_collection.json';
// Chemin où le fichier Swagger sera généré
const outputFile = './src/swagger_output.json';

postmanToOpenApi(postmanCollection, outputFile, {
  defaultTag: 'General',
})
  .then((result) => {
    console.log(`Swagger file generated at ${outputFile}`);
  })
  .catch((err) => {
    console.error(err);
  });
