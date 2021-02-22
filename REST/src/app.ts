import logger from 'morgan'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import routes from './ui/routes'
import express, { Application, Request, Response, NextFunction } from 'express'
import { ApiException, IExceptionError } from './ui/exceptions/api.exception'
import morgan from 'morgan';
import qs from 'query-strings-parser'

import { CustomLogger } from '../config/custom.logger';
import { BackgroundTask } from './background/background.task'

export class App {
    private readonly app: Application
    private _logger = CustomLogger.getInstance()

    /**
     * Class constructor.
     */
    constructor() {
        this.app = express()
        this.bootstrap()
    }

    /**
     * Get express instance.
     *
     * @returns Application
     */
    getExpress(): Application {
        return this.app
    }

    /**
     * Bootstrap app.
     */
    bootstrap(): void {
        this.middlewares()
        this.routes()
    }

    /**
     * Initialize middlewares.
     *
     * @returns void
     */
    private middlewares(): void {
        let env = process.env.NODE_ENV

        /**
         * Middlewares that must be run
         * only in the development environment.
         */
        if (env != undefined && env.trim() == 'dev') this.app.use(logger('dev'))

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))

        this.app.use(morgan(':remote-addr :remote-user ":method :url HTTP/:http-version" ' +
            ':status :res[content-length] :response-time ms ":referrer" ":user-agent"', {
            stream: { write: (str: string) => this._logger.info(str) }
        }
        ))
        this.app.use(qs({
            use_page: false,
            default: { pagination: { limit: 100 } }
        }))

        /**
         * Middleware swagger. It should not run in the test environment.
         */
        if (env != undefined && env.trim() != 'test') {
            let options = {
                customCss: '.swagger-ui .topbar { display: none }',
                customfavIcon: 'https://i.imgur.com/XFouYv1.jpg',
                customSiteTitle: `API Reference | api-template`
            }

            this.app.use('/api/reference', swaggerUi.serve, swaggerUi.setup(
                yaml.load('./src/ui/swagger/swagger.yaml'), options)
            )
        }
    }

    /**
     * Initializes as routes available in the service.
     *
     * @returns void
     */
    private routes(): void {
        this.app.use('/', routes)

        // Handle 404
        this.app.use((req: Request, res: Response) => {
            let errorMessage: IExceptionError = new ApiException(404, `${req.url} not found.`,
                `Specified resource: ${req.url} was not found or does not exist.`)

            res.status(404).send(errorMessage.toJson())
        });

        // Handle 500
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            let errorMessage: IExceptionError = new ApiException(err.code, err.message, err.description)
            res.status(500).send(errorMessage.toJson())
        });
    }
}

export default BackgroundTask.getInstance().run().then(() => new App().getExpress())
