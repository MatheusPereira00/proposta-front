import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropostaService } from './service/proposta.service';
import { PropostaResponse } from './types/PropostaResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proposta';

  @ViewChild('popupSucesso')
  popupSucessoRef!: ElementRef;

  @ViewChild('popupErro')
  popupErroRef!: ElementRef;

  public creditoForm: FormGroup;
  public carregando = false;

  public proposta!: PropostaResponse[];

  private propostaService = inject(PropostaService);

  constructor() {
    this.creditoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      renda: new FormControl('', Validators.required),
      valorSolicitado: new FormControl('', Validators.required),
      prazoPagamento: new FormControl('', Validators.required)
    });
  }

  public ngOnInit() {
    this.findAllPropostas();
    localStorage.getItem('dadosFormulario');
    const dadosSalvos = localStorage.getItem('dadosFormulario');
    if (dadosSalvos) {
      this.creditoForm.setValue(JSON.parse(dadosSalvos));
    }
  }

  public apagar() {
    this.creditoForm.reset();
    localStorage.removeItem('dadosFormulario')
  }

  public mostrarPopup(popupRef: ElementRef) {
    popupRef.nativeElement.style.display = 'block';
  }

  public fecharPopup(popupRef: ElementRef) {
    popupRef.nativeElement.style.display = 'none';
  }

  public findAllPropostas() {
    this.propostaService.findAllPropostas().subscribe(propostas => {
      console.log(propostas);
      this.proposta = propostas;
    })
  }

  public createProposta() {
    if (this.creditoForm.valid) {
      this.carregando = true; // Set loading indicator to true

      const proposta = this.creditoForm.getRawValue();

      this.propostaService.createProposta(proposta)
        .subscribe(proposta => {
          localStorage.setItem('dadosFormulario', JSON.stringify(proposta));
          this.mostrarPopup(this.popupSucessoRef);
          this.carregando = false; // Set loading indicator to false after success
        }, error => {
          this.mostrarPopup(this.popupErroRef);
          this.carregando = false; // Set loading indicator to false after error
        });
    } else if (this.creditoForm.invalid) {
      this.mostrarPopup(this.popupErroRef);
    }
  }
}
