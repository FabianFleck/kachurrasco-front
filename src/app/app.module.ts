import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListarCervejasComponent } from './listar-cervejas/listar-cervejas.component';
import { EditarCervejaComponent } from './editar-cerveja/editar-cerveja.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ProdutoService } from './produto.service'

const appRoutes: Routes = [
  { path: 'cervejas', component: ListarCervejasComponent },
  { path: 'cervejas/:id', component: EditarCervejaComponent },
  { path: 'produtos', component: ListarProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    EditarCervejaComponent,
    ListarProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
