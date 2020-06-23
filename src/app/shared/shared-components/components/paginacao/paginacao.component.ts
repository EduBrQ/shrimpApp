import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-paginacao",
    templateUrl: "./paginacao.component.html",
    styleUrls: ["./paginacao.component.css"],
})
export class PaginacaoComponent {
    @Input()
    totalItems: number;

    @Input()
    itensPorPagina: number;

    @Input()
    quantidadeItemsAtuais = 10;

    @Input()
    pageIndex: string;

    @Output() consultarPagina: EventEmitter<number> = new EventEmitter();

    constructor() {}

    public novaPagina(event: any): void {
        this.consultarPagina.next(event.page);
    }
}
