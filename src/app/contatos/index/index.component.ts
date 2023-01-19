import { Component } from '@angular/core';
import { ApiContatoService } from '../api-contato.service';
import { Contato } from '../Contato';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {

  contatos! : Contato[];
  contato! : Contato;

  constructor(private apiContatoService : ApiContatoService){}

  ngOnInit() : void {
    this.listar();
  }

  listar() {
    this.apiContatoService.listar()
      .subscribe(contatos => {this.contatos = contatos;});
  }

}
