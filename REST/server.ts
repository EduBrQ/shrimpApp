import App from './src/app'
import * as dotenv from "dotenv"
import { CustomLogger } from "./config/custom.logger";

dotenv.config()
const logger = CustomLogger.getInstance()

const port = process.env.PORT_HTTP
App.then((app) => {
    app.listen(port, () => logger.info(`Server running on port ${port}`))
}).catch(err => {
    console.log('ERROR!!!');

    process.exit(1)
})
