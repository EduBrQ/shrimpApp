import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AtualizarCardService {

  private subject = new Subject<any>();

  public notificarCard(req: string): void {
    this.subject.next({ text: req });
  }

  public getRequerimento(): Observable<any> {
    return this.subject.asObservable();
  }

}
