// api-key.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add your API key to the headers
    const apiKey = 'KjTFKEGi7R11DuvLSPaV16IJLfTPCkKV3qowOXtE'; // Replace with your actual API key

    const headers = new HttpHeaders({
      'x-api-key': apiKey,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET',
    });

    // Clone the request and add the API key to the headers
    const modifiedReq = req.clone({ headers });

    // Proceed with the modified request
    return next.handle(modifiedReq);
  }
}
