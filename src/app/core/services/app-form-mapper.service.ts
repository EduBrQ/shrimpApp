import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormMapperService {

    mapperDadosByObjectToForm(propVisuModel: any, group: FormGroup, disableControls = true): any {
        Object.keys(propVisuModel).forEach((att: any) => {
            if (propVisuModel[att] instanceof Object) {
                this.mapperDadosByObjectToForm(propVisuModel[att], group.get(att) as FormGroup);
            } else {
                if (group != null && propVisuModel[att] != null) {
                    const control = group.get(att);
                    if (control != null) {
                        control.setValue(propVisuModel[att]);
                        if (disableControls) {
                            control.disable();
                        }
                    }
                }
            }
        });
    }
}