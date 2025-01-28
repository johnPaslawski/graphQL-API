const initMessages = {
    
    apolloReady: `graphQlApi ---- \x1b[35m[${new Date().toISOString().slice(0, 19)}]\x1b[0m Apollo server middleware: \x1b[32mREADY\x1b[0m`,
    apiRunning: `graphQlApi ---- \tAPI is running . . .`,
    dbSyncing: `graphQlApi ---- \x1b[35m[${new Date().toISOString().slice(0, 19)}]\x1b[0m Syncing database . . .\x1b[32mREADY\x1b[0m`,
    dbReady: `graphQlApi ---- \x1b[35m[${new Date().toISOString().slice(0, 19)}]\x1b[0m SQLite database: \x1b[32mREADY\x1b[0m`,
    expressReady: `graphQlApi ---- \x1b[35m[${new Date().toISOString().slice(0, 19)}]\x1b[0m Express server app: \x1b[32mREADY\x1b[0m`,
    serverRunning:(PORT: string | number) => {return `graphQlApi ---- \x1b[35m[${new Date().toISOString().slice(0, 19)}]\x1b[0m Server is running on URL: \x1b[36mhttp://localhost:${PORT}\x1b[0m \x1b[32mREADY\x1b[0m`},
    readyToRoll: `graphQlApi ---- \x1b[33m READY TO ROLL !\x1b[0m`,
    apiKeyReady: `graphQlApi ---- \x1b[35m[${new Date().toISOString().slice(0, 19)}]\x1b[0m API_KEY loading from .env variables \x1b[32mREADY\x1b[0m`,
}

export default initMessages;