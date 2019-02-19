import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from './produto';
import { ProdutoService } from '../service/produto/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
  providers: [ProdutoService]
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[];

  constructor(
    private router: Router,
    private service: ProdutoService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(data => this.produtos = data);
  }

  editarProduto(produto: Produto) {
    this.router.navigate(['/produtos', produto.idProduto]);
  }

  novoProduto() {
    this.router.navigate(['/produtos/novo']);
  }
}
