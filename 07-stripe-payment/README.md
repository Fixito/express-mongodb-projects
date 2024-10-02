# 06-stripe-payment

Ce projet est une démonstration de l'intégration de Stripe pour accepter des paiements en ligne.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

1. Installez les dépendances :

```sh
npm install
```

2. Créez un fichier `.env` en vous basant sur le fichier `.env.sample` et remplissez les variables d'environnement nécessaires :

```sh
cp .env.sample .env
```

3. Modifiez le fichier [`.env`](./.env) pour y ajouter vos clés API Stripe :

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
PORT=5000
```

## Démarrage du serveur

Pour démarrer le serveur en mode développement :

```sh
npm run dev
```

Pour démarrer le serveur en mode production :

```sh
npm run start
```

Le serveur sera accessible à l'adresse http://localhost:5000.

## Routes

**POST /create-payment-intent** : Crée une intention de paiement et retourne le clientSecret.

## Démonstration

- Ouvrez http://localhost:5000 dans votre navigateur.
- Remplissez le formulaire de paiement et soumettez-le.
- Vous serez redirigé vers une page de statut de commande.

## Licence

Ce projet est sous licence ISC.
