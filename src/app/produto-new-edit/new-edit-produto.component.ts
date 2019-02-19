import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from '../produto-listar/produto';
import { ProdutoService } from '../service/produto/produto.service';

@Component({
  selector: 'app-new-edit-produtos',
  templateUrl: './new-edit-produto.component.html',
  styleUrls: ['./new-edit-produto.component.css'],
  providers: [ProdutoService]
})
export class NewEditProdutoComponent implements OnInit {

  @Input()
  produto: Produto = new Produto();

  new = false;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const idProduto = 'id';
    const id = +this.route.snapshot.params[idProduto];
    if (id) {
      this.service.getById(id)
        .subscribe(data => this.produto = data);
    } else {
      this.new = true;
    }
  }

  saveUpdate(produto: Produto) {
    this.produto = produto;
    if (this.new) {
      this.save();
    } else {
      this.update();
    }
  }

  save() {
    this.produto.status = 'ATIVO';
    console.log(this.service.save(this.produto));
  }

  update() {
    console.log('UPDATE');
  }
}
