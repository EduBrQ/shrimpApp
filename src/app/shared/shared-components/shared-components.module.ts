import { FitroDesignarAnaliseComponent } from "./components/container-analise/components/fitro-designar-analise/fitro-designar-analise.component";
import { ContainerPadraoComponent } from "./components/container-padrao/container-padrao.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
import { ModalModule, PaginationModule } from "ngx-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { SharedPipesModule } from "../shared-pipes/shared-pipes.module";
import { AdicionarFormularioComponent } from "./components/adicionar-formulario/adicionar-formulario.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CardFormularioComponent } from "./components/card-formulario/card-formulario.component";
import { ContainerFormularioComponent } from "./components/container-formulario/container-formulario.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { InputListaCheckboxComponent } from "./components/input-lista-checkbox/input-lista-checkbox/input-lista-checkbox.component";
import { InputListaRadioComponent } from "./components/input-lista-radio/input-lista-radio.component";
import { InputContainerComponent } from "./components/input/input-container.component";
import { LoginComponent } from "./components/login/login.component";
import { PaginacaoComponent } from "./components/paginacao/paginacao.component";
import { TooltipModule } from "ngx-bootstrap";
import { ListaVaziaComponent } from "./components/lista-vazia/lista-vazia.component";
import { SipuModalModule } from "../sipu-modal-module/sipu-modal.module";
import { PopoverComponent } from "./components/popover/popover.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputListaRadioComponent,
    ContainerFormularioComponent,
    ContainerPadraoComponent,
    FitroDesignarAnaliseComponent,
    LoginComponent,
    InputContainerComponent,
    InputListaCheckboxComponent,
    PaginacaoComponent,
    BreadcrumbComponent,
    AdicionarFormularioComponent,
    CardFormularioComponent,
    ListaVaziaComponent,
    PopoverComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputListaRadioComponent,
    ContainerFormularioComponent,
    ContainerPadraoComponent,
    FitroDesignarAnaliseComponent,
    LoginComponent,
    InputContainerComponent,
    InputListaCheckboxComponent,
    PaginacaoComponent,
    BreadcrumbComponent,
    AdicionarFormularioComponent,
    CardFormularioComponent,
    ListaVaziaComponent,
    PopoverComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 3000,
      positionClass: "toast-top-right",
    }),
    RouterModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedDirectivesModule,
    FormsModule,
    SharedPipesModule,
    SipuModalModule.forRoot(),
  ],
})
export class SharedComponentsModule { }
