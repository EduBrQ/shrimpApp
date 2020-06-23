import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './modules/private/private.module';
import { PublicModule } from './modules/public/public.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedDirectivesModule } from './shared/shared-directives/shared-directives.module';
import { ValidacaoFormularioModule } from './shared/shared-modules/validacao-formulario/validacao-formulario.module';
import { MtNgxModalModule } from './shared/shared-modules/mt-ngx-modal/mt-ngx-modal.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DataUtilService } from './shared/util/data-util.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [

  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedDirectivesModule,
    ValidacaoFormularioModule.forRoot(),
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    MtNgxModalModule.forRoot(),
    NgxSpinnerModule,
    PublicModule,
    PrivateModule,
    CoreModule,
    SharedComponentsModule
  ],
  providers: [
    DataUtilService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
