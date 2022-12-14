import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IBorrowedBook } from '../borrowed-book.model';
import { BorrowedBookService } from '../service/borrowed-book.service';

@Injectable({ providedIn: 'root' })
export class BorrowedBookRoutingResolveService implements Resolve<IBorrowedBook | null> {
  constructor(protected service: BorrowedBookService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IBorrowedBook | null | never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((borrowedBook: HttpResponse<IBorrowedBook>) => {
          if (borrowedBook.body) {
            return of(borrowedBook.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}
