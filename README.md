# ZApp Report App

A Node.js server application using [jsreport](https://jsreport.net/) for generating and managing reports, with PostgreSQL as the data store.

## Features

- jsreport server integration
- PostgreSQL storage for reports and templates
- Easy startup and shutdown scripts

## Prerequisites

- Node.js (v16+ recommended)
- [pnpm](https://pnpm.io/) package manager
- PostgreSQL database

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd ZApp_Report_App
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

## Configuration

Configure your PostgreSQL connection in `jsreport.config.json` or via environment variables as per [jsreport-postgres-store documentation](https://jsreport.net/learn/postgres-store).

## Usage

### Start the server

```sh
pnpm start
```

The server will initialize jsreport and connect to PostgreSQL.

### Use jsreport CLI

```sh
pnpm jsreport
```

## Scripts

- `start`: Starts the jsreport server (`server.js`)
- `jsreport`: Runs jsreport CLI

## Project Structure

- `server.js`: Main server entry point
- `package.json`: Project metadata and scripts

## Shutting Down

The server handles graceful shutdown on `SIGTERM` and `SIGINT` signals.

## Learn More

- [jsreport Documentation](https://jsreport.net/learn)
- [jsreport-postgres-store](https://jsreport.net/learn/postgres-store)

## License

MIT

