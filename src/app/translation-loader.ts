import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Crea una función de fábrica para cargar las traducciones
export function provideTranslateHttpLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

// Exporta una constante con los providers necesarios para standalone
export const translateProviders = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: provideTranslateHttpLoader,
      deps: [HttpClient]
    }
  }).providers!
];
