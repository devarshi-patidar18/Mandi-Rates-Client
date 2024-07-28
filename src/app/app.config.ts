import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(),provideRouter(routes), provideClientHydration(),importProvidersFrom(HttpClientModule),provideHttpClient(withFetch())]
};

// export const appConfig: ApplicationConfig = 
// { providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)]};