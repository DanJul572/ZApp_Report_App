const path = require("path");
const dotenv = require("dotenv");

// Same files and order as the other ZApp apps. The first file that sets a variable wins, and
// variables already set in the shell are never overwritten.
const nodeEnv = process.env.NODE_ENV || "development";

const files = [`.env.${nodeEnv}.local`, ".env.local", `.env.${nodeEnv}`, ".env"].map((file) =>
    path.resolve(__dirname, file)
);

dotenv.config({ path: files, quiet: true });

// jsreport options from the env files. They win over jsreport.config.json; a variable that is
// not set keeps the value of jsreport.config.json.
const options = {};

function setOption(keys, value) {
    if (value === undefined || value === "") {
        return;
    }

    let target = options;
    for (const key of keys.slice(0, -1)) {
        target = target[key] ??= {};
    }
    target[keys[keys.length - 1]] = value;
}

const env = process.env;

setOption(["httpPort"], env.PORT && Number(env.PORT));

setOption(["extensions", "postgres-store", "host"], env.DB_HOST);
setOption(["extensions", "postgres-store", "port"], env.DB_PORT && Number(env.DB_PORT));
setOption(["extensions", "postgres-store", "database"], env.DB_NAME);
setOption(["extensions", "postgres-store", "user"], env.DB_USER);
setOption(["extensions", "postgres-store", "password"], env.DB_PASS);

setOption(["extensions", "authentication", "admin", "username"], env.JSREPORT_USER);
setOption(["extensions", "authentication", "admin", "password"], env.JSREPORT_PASS);
setOption(["extensions", "authentication", "cookieSession", "secret"], env.COOKIE_SECRET);

module.exports = options;
