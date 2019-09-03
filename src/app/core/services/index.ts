import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from '@app/core/services/auth-interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];
