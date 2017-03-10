import './polyfills.ts';
import { platformUniversalDynamic } from 'angular2-universal/browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.browser.module';
if (environment.production) {
    enableProdMode();
}
// platformBrowserDynamic().bootstrapModule(AppModule);
var platformRef = platformUniversalDynamic();
// bootstrap Angular on document ready
document.addEventListener('DOMContentLoaded', function () {
    platformRef.bootstrapModule(AppModule);
});
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/fos-front/src/main.js.map