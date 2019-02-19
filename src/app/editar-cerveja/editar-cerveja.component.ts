import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cerveja } from '../cerveja';
import { CervejaService } from '../cerveja.service';

@Component({
  selector: 'app-editar-cerveja',
  templateUrl: './editar-cerveja.component.html',
  styleUrls: ['./editar-cerveja.component.css'],
  providers: [CervejaService]
})
export class EditarCervejaComponent implements OnInit {

  @Input()
  cerveja: Cerveja = new Cerveja();

  novo = false;

  constructor(
    private service: CervejaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const stringId = 'id';
    const id = +this.route.snapshot.params[stringId];
    if (id) {
      this.cerveja = this.service.obterCerveja(id);
    } else {
      this.novo = true;
    }
  }

  salvar(cerveja: Cerveja) {
    this.router.navigate(['/cervejas']);
  }

}
