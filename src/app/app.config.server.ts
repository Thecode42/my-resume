import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),provideClientHydration(withIncrementalHydration())
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
