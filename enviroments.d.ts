declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_BOT_TOKEN : string | undefined;
        }
    }
}

export {};