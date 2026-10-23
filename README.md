# ZApp Report App

A Node.js server application using [jsreport](https://jsreport.net/) for generating and managing reports, with PostgreSQL as the data store.

## Features

- jsreport server integration
- PostgreSQL storage for reports and templates
- Easy startup and shutdown scripts

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- npm (this app uses npm, not pnpm)
- PostgreSQL database

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd ZApp_Report_App
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

`jsreport.config.json` holds the base configuration. The port, database and admin login can be
set per environment in env files (see `.env.example`), and those values win over
`jsreport.config.json`. A variable left empty keeps the value of `jsreport.config.json`.

`NODE_ENV` picks the env files. They are read in this order, and the first file that sets a
variable wins; variables already set in the shell are never overwritten:

1. `.env.<NODE_ENV>.local`
2. `.env.local`
3. `.env.<NODE_ENV>`
4. `.env`

```sh
cp .env.example .env.development   # then fill it in
```

## Usage

### Start the server

```sh
npm run start:dev     # NODE_ENV=development
npm run start:stage   # NODE_ENV=stage
npm run start:prod    # NODE_ENV=production
```

The server will initialize jsreport and connect to PostgreSQL.

### Use jsreport CLI

```sh
npm run jsreport
```

## Scripts

- `start`: Starts the jsreport server (`server.js`); NODE_ENV defaults to development
- `start:dev`, `start:stage`, `start:prod`: Start the server with that NODE_ENV
- `jsreport`: Runs jsreport CLI

## Project Structure

- `server.js`: Main server entry point
- `loadEnv.js`: Loads the env files and turns them into jsreport options
- `jsreport.config.json`: Base jsreport configuration
- `package.json`: Project metadata and scripts

## Shutting Down

The server handles graceful shutdown on `SIGTERM` and `SIGINT` signals.

## Learn More

- [jsreport Documentation](https://jsreport.net/learn)
- [jsreport-postgres-store](https://jsreport.net/learn/postgres-store)

## License

MIT

