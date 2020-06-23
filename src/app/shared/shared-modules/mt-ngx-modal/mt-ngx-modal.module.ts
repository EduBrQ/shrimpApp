import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { MtNgxModalService } from './services/mt-ngx-modal.service';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class MtNgxModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MtNgxModalModule,
      providers: [MtNgxModalService]
    };
  }
}
