import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { SipuModalService } from './services/sipu-modal.service';
@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ]
})
export class SipuModalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SipuModalModule,
            providers: [SipuModalService]
        };
    }
}
