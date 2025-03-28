export function checkEnvConfig() {
  if (!process.env.API_BOT_TOKEN) {
    console.error("env.API_BOT_TOKEN is required");
    throw new Error("env.API_BOT_TOKEN is required");
  }
  return process.env.API_BOT_TOKEN
}
