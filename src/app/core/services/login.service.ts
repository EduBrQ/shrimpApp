import { environment } from './../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { AutenticacaoModel } from 'src/app/shared/shared-models/interface/autenticacao.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(
    private handler: HttpBackend,
  ) { }

  atualizarToken(refreshToken: string): Observable<AutenticacaoModel> {
    const httpAdp = new HttpClient(this.handler);
    return httpAdp.get<AutenticacaoModel>(
      `${environment.apiUrl}/jwt/refresh`, {
      headers: {
        'Authorization': `${refreshToken}`
      }
    }
    );
  }
}
