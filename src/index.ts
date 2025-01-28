import app from "./app";
import sequelize from "./infrastructure/config/database";
import initMessages from "./consoleMessages/initMessages";

const PORT = process.env.PORT || 3001;

(async () => { 
    console.log(initMessages.dbSyncing);

    await sequelize.sync();

    console.log(initMessages.dbReady);

    app.listen(PORT, () => {
        console.log(initMessages.expressReady);
        console.log(initMessages.serverRunning(PORT));
        console.log(initMessages.readyToRoll);
    });
})();



