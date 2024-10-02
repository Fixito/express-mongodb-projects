# Gestionnaire de Tâches

Ce projet est une application de gestion de tâches construite avec Node.js, Express, et MongoDB.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)
- MongoDB

## Installation

1. Installez les dépendances :

```sh
npm install
```

2. Configurez les variables d'environnement :

- Créez un fichier `.env` à la racine du projet en copiant le contenu de `.env.sample` :

```sh
cp .env.sample .env
```

- Remplissez la variable `MONGO_URI` dans le fichier [`.env`](./.env) avec l'URI de connexion à votre base de données MongoDB.

## Utilisation

### En développement

Pour démarrer le serveur en mode développement avec `nodemon`, exécutez :

```sh
npm run dev
```

### En production

Pour démarrer le serveur en mode production, exécutez :

```sh
npm start
```

### Structure du projet

- **public/** : Contient les fichiers statiques (HTML, CSS, JS).
- **src/** : Contient le code source de l'application.
  - **config/** : Configuration de la base de données.
  - **controllers/** : Logique des contrôleurs.
  - **errors/** : Gestion des erreurs personnalisées.
  - **middlewares/** : Middlewares Express.
  - **models/** : Modèles Mongoose.
  - **routes/** : Définition des routes.
  - **services/** : Logique métier.

### Routes de l'API

- **GET /api/v1/tasks** : Récupère toutes les tâches.
- **POST /api/v1/tasks** : Crée une nouvelle tâche.
- **GET /api/v1/tasks/:id** : Récupère une tâche par ID.
- **PUT /api/v1/tasks/:id** : Met à jour une tâche par ID.
- **DELETE /api/v1/tasks/:id** : Supprime une tâche par ID.

### Licence

Ce projet est sous licence ISC.
