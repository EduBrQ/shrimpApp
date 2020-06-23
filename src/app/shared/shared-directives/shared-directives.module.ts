import { DataMaskDirective } from "./masks/data-mask.directive";
import { ControleSessaoDirective } from "./controle-sessao.directive";
import { AppStatusBadgeDirective } from "./app-status-badge.directive";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CepDirective } from "./masks/cep-aux.directive";
import { CpfCnpjMaskDirective } from "./masks/cpf-cnpj-mask.directive";
import { IptuMaskDirective } from "./masks/iptu-mask.directive";
import { TelefoneMaskDirective } from "./masks/telefone-mask.directive";
import { DuasCasasDecimaisMaskDirective } from "./masks/duas-casas-decimais-mask.directive";
import { ApenasNumeros } from "./masks/apenas-numeros.directive";
import { CepMaskDirective } from "./masks/cep-mask.directive";
import { IconAnexoDirective } from "./icon-anexo.directive";
import { ClickStopPropagation } from "./stop-propagation.directive";

@NgModule({
    declarations: [
        CpfCnpjMaskDirective,
        ApenasNumeros,
        CepDirective,
        IptuMaskDirective,
        TelefoneMaskDirective,
        DuasCasasDecimaisMaskDirective,
        CepMaskDirective,
        AppStatusBadgeDirective,
        ClickStopPropagation,
        IconAnexoDirective,
        DataMaskDirective,
        ControleSessaoDirective
    ],
    exports: [
        CpfCnpjMaskDirective,
        ApenasNumeros,
        CepDirective,
        IptuMaskDirective,
        TelefoneMaskDirective,
        DuasCasasDecimaisMaskDirective,
        CepMaskDirective,
        DataMaskDirective,
        AppStatusBadgeDirective,
        ClickStopPropagation,
        IconAnexoDirective,
        ControleSessaoDirective
    ],
    imports: [CommonModule]
})
export class SharedDirectivesModule {}
