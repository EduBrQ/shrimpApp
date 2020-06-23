import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthControlService } from "@core/services/auth-control.serice";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    @Input()
    camposFaltantesRT: boolean;
    @Input()
    texto = "text";

    constructor(
        private authService: AuthControlService,
        private route: Router,
        private authControl: AuthControlService
    ) {}

    ngOnInit() {}

    permissaoUsuario() {
        return this.authService.permissaoUsuario("requerimentos");
    }

    permissaoAcoes() {
        return this.authService.permissaoUsuario("acoes");
    }

    gepso() {
        return this.authService.getTipoUsuario().toString() === "INTERNO";
    }

    novoRequerimento() {
        // this.sessionStorageService.limparValores([SessionStorageKeyEnum.ID_REQUERIMENTO]);
        this.route.navigate(["admin/requerimento/tipo-requerimento"]);
    }

    designarAnalise(): void {
        this.route.navigate(["admin/requerimento/designar-analise"]);
    }

    pesquisarRequerimento() {
        const currencyRouteUrl = this.route.url;
        this.route
            .navigate(["admin/requerimento/pesquisar-requerimento"], {
                queryParams: {},
            })
            .then(() => {
                if (currencyRouteUrl.includes("pesquisar-requerimento")) {
                    location.reload();
                }
            });
    }

    alteracaoSenha() {
        this.route.navigate(["admin/alteracao-senha"]);
    }

    pesquisarRegra() {
        this.route.navigate(["admin/regras"]);
    }

    docNecessaria() {
        this.route.navigate(["admin/documentacao/pesquisar"]);
    }

    isLogged() {
        return this.authControl.isLogged();
    }

    sair() {
        this.authControl.logoutCAS();
    }

    analiseDocumental() {
        this.route.navigate(["admin/analise-documental"]);
    }

    requerimentosEmAnalise() {
        this.route.navigate(["admin/requerimento/requerimentos-analise"]);
    }

    realizarAnalise() {
        this.route.navigate(["admin/analise/visualizar-analise"]);
    }

    navegarAjuda() {
        this.route.navigate(["admin/ajuda"]);
    }
}
