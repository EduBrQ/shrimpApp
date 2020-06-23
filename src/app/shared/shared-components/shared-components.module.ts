import { ContainerPadraoComponent } from "./components/container-padrao/container-padrao.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
import { ToastrModule } from "ngx-toastr";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { ContainerFormularioComponent } from "./components/container-formulario/container-formulario.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { InputListaCheckboxComponent } from "./components/input-lista-checkbox/input-lista-checkbox/input-lista-checkbox.component";
import { InputListaRadioComponent } from "./components/input-lista-radio/input-lista-radio.component";
import { InputContainerComponent } from "./components/input/input-container.component";
import { ListaVaziaComponent } from "./components/lista-vazia/lista-vazia.component";
import { PopoverComponent } from "./components/popover/popover.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputListaRadioComponent,
    ContainerFormularioComponent,
    ContainerPadraoComponent,
    InputContainerComponent,
    InputListaCheckboxComponent,
    BreadcrumbComponent,
    ListaVaziaComponent,
    PopoverComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputListaRadioComponent,
    ContainerFormularioComponent,
    ContainerPadraoComponent,
    InputContainerComponent,
    InputListaCheckboxComponent,
    BreadcrumbComponent,
    ListaVaziaComponent,
    PopoverComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 3000,
      positionClass: "toast-top-right",
    }),
    RouterModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    FormsModule,
  ],
})
export class SharedComponentsModule { }
