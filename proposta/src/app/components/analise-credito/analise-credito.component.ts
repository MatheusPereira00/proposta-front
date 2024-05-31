import { Component, OnInit, inject } from '@angular/core';
import { PropostaService } from 'src/app/service/proposta.service';
import { PropostaResponse } from 'src/app/types/PropostaResponse';

@Component({
  selector: 'app-analise-credito',
  templateUrl: './analise-credito.component.html',
  styleUrls: ['./analise-credito.component.scss']
})
export class AnaliseCreditoComponent implements OnInit {

  public proposta!: PropostaResponse[];

  private propostaService = inject(PropostaService);

  ngOnInit(): void {
      this.findAllPropostas();
  }

  public findAllPropostas() {
    this.propostaService.findAllPropostas().subscribe(propostas => {
      console.log(propostas);
      this.proposta = propostas;
    })
  }

}
