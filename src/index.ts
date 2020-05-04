import { ApiApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { radioMonitor } from "./samp-server/dj";

export { ApiApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new ApiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  radioMonitor(app);

  return app;
}
