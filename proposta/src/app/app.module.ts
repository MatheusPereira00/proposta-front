import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgFor, NgIf } from '@angular/common';
import { AnaliseCreditoComponent } from './components/analise-credito/analise-credito.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AnaliseCreditoComponent,
    SolicitacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgFor,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
