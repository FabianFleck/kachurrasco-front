import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditarCervejaComponent } from './editar-cerveja/editar-cerveja.component';
import { ListarCervejasComponent } from './listar-cervejas/listar-cervejas.component';
import { ListarProdutosComponent } from './produto-listar/listar-produtos.component';
import { NewEditProdutoComponent } from './produto-new-edit/new-edit-produto.component';

const appRoutes: Routes = [
  { path: 'cervejas', component: ListarCervejasComponent },
  { path: 'cervejas/:id', component: EditarCervejaComponent },
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produtos/:id', component: NewEditProdutoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListarCervejasComponent,
    EditarCervejaComponent,
    ListarProdutosComponent,
    NewEditProdutoComponent
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
