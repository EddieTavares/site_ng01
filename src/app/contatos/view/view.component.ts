import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiContatoService } from '../api-contato.service';
import { Contato } from '../Contato';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})

export class ViewComponent {

  id! : Number;
  contato! : Contato;

  constructor(
      private apiContatoService : ApiContatoService, 
      private route : ActivatedRoute){}

  ngOnInit() : void {

    debugger;
    
      this.id = this.route.snapshot.params['id'];

      this.apiContatoService.buscar(this.id)
        .subscribe(contato => {this.contato = contato;});
  }
}
