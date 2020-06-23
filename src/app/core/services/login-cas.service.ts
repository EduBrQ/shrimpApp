import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { AutenticacaoModel } from 'src/app/shared/shared-models/interface/autenticacao.model';

@Injectable()
export class LoginCasService {

    constructor(
        private http: HttpClient
    ) { }

    loginByTicket(ticket: string): Observable<AutenticacaoModel> {
        const headerss = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this.http.post<AutenticacaoModel>(
            `${environment.apiUrl}/cas`,
            ticket, { headers: headerss }
        );

    }
}
