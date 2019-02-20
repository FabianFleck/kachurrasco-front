import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './produto-listar/listar-produtos.component';
import { NewEditProdutoComponent } from './produto-new-edit/new-edit-produto.component';

const appRoutes: Routes = [
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produtos/:id', component: NewEditProdutoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
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
