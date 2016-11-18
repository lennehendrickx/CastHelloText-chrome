import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './receiver.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);