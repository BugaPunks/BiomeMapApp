import {
	type ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection, isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient } from "@angular/common/http";
import { LeafletModule } from "@bluehalo/ngx-leaflet";

import { routes } from "./app.routes";
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimationsAsync(),
		provideHttpClient(),
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
	],
};
