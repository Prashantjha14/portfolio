interface Config {
  mongoUri: string;
}

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const config: Config = {
  mongoUri: getEnvVar("MONGODB_URI"),
};

export default config;
