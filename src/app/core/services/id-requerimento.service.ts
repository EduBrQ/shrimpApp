import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class IdRequerimentoService {
  idRequerimento$: Subject<number> = new Subject();
  private idRequerimentoAtual: number;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(() => {
        this.idRequerimentoAtual = this.recuperarParametroId(this.activatedRoute);
        this.setIdRequerimento(this.idRequerimentoAtual);
      });
  }
  getIdRequerimento(): number {
    return this.idRequerimentoAtual ? this.idRequerimentoAtual : this.recuperarParametroId(this.activatedRoute);
  }
  private setIdRequerimento(idRequerimento: number) {
    this.idRequerimento$.next(idRequerimento);
  }
  private recuperarParametroId(actRouter: ActivatedRoute) {
    if (actRouter && actRouter.children && actRouter.children.length) {
      const actRouterAtual = actRouter.children.find(router => router.snapshot.params['id']);
      return actRouterAtual != null ? actRouterAtual.snapshot.params['id'] : this.recuperarParametroId(actRouter.children[0]);
    }
  }
  recuperarParametro(parametro: string, actRouter?: ActivatedRoute) {
    const rotaSelecionada = actRouter ? actRouter : this.activatedRoute;
    if (rotaSelecionada && rotaSelecionada.children && rotaSelecionada.children.length) {
      const actRouterAtual = rotaSelecionada.children.find(router => router.snapshot.params[parametro]);
      return actRouterAtual != null ? actRouterAtual.snapshot.params[parametro] : this.recuperarParametro(parametro, rotaSelecionada.children[0]);
    }
  }
  recuperarRouterData(dataNome: string, actRouter?: ActivatedRoute) {
    const rotaSelecionada = actRouter ? actRouter : this.activatedRoute;
    if (rotaSelecionada && rotaSelecionada.children.length) {
      const actRouterAtual = rotaSelecionada.snapshot.data[dataNome] ?
        rotaSelecionada :
        (rotaSelecionada.children && rotaSelecionada.children.length ? rotaSelecionada.children.find(router => router.snapshot.data[dataNome]) : null);
      return actRouterAtual ? actRouterAtual.snapshot.data[dataNome] : this.recuperarRouterData(dataNome, rotaSelecionada.children[0]);
    }
  }
}