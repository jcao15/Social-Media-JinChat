//entry file for app
import express, { Express } from 'express';
import { ChattyServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';
import { config } from '@root/config';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);

    server.start();
  }

  private localConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();
