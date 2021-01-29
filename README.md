# Spotify Controls

A tiny website that controls your Spotify playback. This allows full song playback instead of the 30 second snippets from the embed widget. This project is open source, MIT licensed, and non-commercial. Using this for a commercial project is against the user agreement of the Spotify API.

## Table of Contents

- [Spotify Controls](#spotify-controls)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Notion](#notion)
  - [Developer Stuff](#developer-stuff)
    - [Hacking](#hacking)
    - [Testing](#testing)
    - [Deploying to Vercel (Recommended)](#deploying-to-vercel-recommended)
      - [Easy Deploy (Recommended)](#easy-deploy-recommended)
      - [Manual Deploy](#manual-deploy)
    - [Deploying Elsewhere](#deploying-elsewhere)

## Overview

This site is built on [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com). You're free to fork and deploy this on your own GitHub and Vercel account using the deploy button below.

That said, doing so is unnecessary since this site allows users to log in under their Spotify accounts using their OAuth implicit grant flow. This app does not collect, record, use, or distribute user data. It's impossible for me to gain your credentials or data.

The real reason to do this would be to control, modify, or extend the source code as well as have more assurances of the long term stability of the widget. I make no guarantees of **my** deployment's reliability or availability.

### Notion

One of the reasons I wrote this was to embed these controls on [Notion](https://notion.so). Here's the long and short of that. Use the notion embed block and paste one of these links. The only difference between them is theming.

- Use your system theme: `https://spotify.mkalvas.com`
- Always dark mode: `https://spotify.mkalvas.com/dark`
- Always light mode:  `https://spotify.mkalvas.com/light`

Once it loads up, you should be able to do a Spotify OAuth login and then stream music if you have a premium account.

## Developer Stuff

### Hacking

```sh
git clone git@github.com:mkalvas/spotify-controls.git
cd ./spotify-controls
npm install # (or yarn if you prefer)

# Add your env vars before running if you want to connect to spotify. See below.
# Otherwise you can still hack on the UI just like this
npm run dev
```

### Testing

Tests are for losers :trollface:. I just didn't have time and the UI is simple, file an issue here if you're having problems.

### Deploying to Vercel (Recommended)

#### Easy Deploy (Recommended)

1. Get env vars from your developer account with Spotify.
2. Click Deploy, add env vars during the automated process.

// TODO: Deploy button here

#### Manual Deploy

1. Fork this project to your GitHub account.
2. Create an account on [Vercel](https://vercel.com).
3. From the dashboard page click **Import Project** then specify the URL to your fork of the project on GitHub.
4. Add the required [environment variables](#environment-variables).
5. Deploy and visit your application at `<deploy-id>.vercel.app` or your other project configured DNS.

### Deploying Elsewhere

You'll have to look at the docs on [how to deploy Next.js projects](https://nextjs.org/docs/deployment) to other environments in order to figure out the best path for your situation.
