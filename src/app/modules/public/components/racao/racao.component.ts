import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'app/shared/shared-services/validators-service.service';

@Component({
  selector: 'app-racao',
  templateUrl: './racao.component.html',
  styleUrls: ['./racao.component.scss']
})
export class RacaoComponent implements OnInit {
  viveiroID: any;
  racao: { data: string; qntManha: number; qntTarde: number; }[];
  formRacao: FormGroup;
  formSubmitAttempt: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private validateFormService: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.viveiroID = this.activatedRoute.snapshot.parent.params.id;
    this.racao = [
      {
        data: '14/06/2020',
        qntManha: 5,
        qntTarde: 5
      },
      {
        data: '15/06/2020',
        qntManha: 5,
        qntTarde: 5
      },
      {
        data: '16/06/2020',
        qntManha: 7,
        qntTarde: 7
      },
      {
        data: '17/06/2020',
        qntManha: 7,
        qntTarde: 7
      },
      {
        data: '18/06/2020',
        qntManha: 8,
        qntTarde: 8
      },
      {
        data: '19/06/2020',
        qntManha: 8,
        qntTarde: 8
      },
    ]
  }

  criarFormulario() {
    this.formRacao = this.fb.group({
      data: ['', Validators.required],
      qntManha: ['', Validators.required],
      qntTarde: ['', Validators.required],
    });
  }

  isFieldValid(field: string) {
    return (!this.formRacao.get(field).valid && this.formRacao.get(field).touched) ||
      (this.formRacao.get(field).untouched && this.formSubmitAttempt);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  adicionarRacao() {
    // const data = 20;
    // this.racao.push({
    //   data: `${data + 1}/06/2020`,
    //   qntManha: 9,
    //   qntTarde: 9
    // })
    this.formSubmitAttempt = true;
    if (this.formRacao.valid) {
      this.racao.push(this.formRacao.getRawValue());
      alert('form submitted');
    } else {
      this.validateFormService.validateAllFormFields(this.formRacao);
    }
  }

}
