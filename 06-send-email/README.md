# 04-send-email

## Description

Ce projet est une application Node.js qui permet d'envoyer des emails en utilisant Nodemailer ou Resend.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

Installez les dépendances :

```sh
npm install
```

## Utilisation

1. Démarrez le serveur en mode développement :

```sh
npm run dev
```

2. Démarrez le serveur en mode production :

```sh
npm start
```

3. Accédez à l'API pour envoyer un email :
   - URL : `http://localhost:5000/api/v1/emails/send`
   - Méthode : `GET`

## Dépendances

- express
- express-async-errors
- nodemailer
- resend

## Licence

ISC
