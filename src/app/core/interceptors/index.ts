import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from '@app/core/interceptors/auth-interceptor';
import { ErrorInterceptor } from '@app/core/interceptors/error-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];
