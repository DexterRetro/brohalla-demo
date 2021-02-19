import { ErrorComponent } from './../components/error/error.component';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  DiagOpen = false;
  constructor(private diag: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let ErrorMessage = 'Unknown Error Occured!';
        let ErrorHeader = 'Error';
        if (err.error.message) {
          ErrorMessage = err.error.message;
        }
        if (err.error.status) {
          ErrorHeader = err.error.status;
        }
        console.log(err);
        if (!this.DiagOpen) {
          this.diag
            .open(ErrorComponent, {
              data: { status: ErrorHeader, message: ErrorMessage },
            })
            .afterClosed()
            .subscribe(() => {
              this.DiagOpen = false;
            });
          this.DiagOpen = true;
        }
        return throwError(err);
      })
    );
  }
}
