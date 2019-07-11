import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AuthModule } from './app/auth/auth.module';
import { environment } from './environments/environment';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AuthModule);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AuthModule)
  .catch(err => console.error(err));
