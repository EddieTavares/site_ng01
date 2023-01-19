import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';    
import { ActivatedRoute, Router } from '@angular/router';
import { ApiContatoService } from '../api-contato.service';
import { Contato } from '../Contato';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  angForm! : FormGroup;
  contato! : Contato; 

  constructor(
    private apiContatoService : ApiContatoService, 
    // private route : ActivatedRoute,
    private router : Router){
      this.criaForm();
    }

  criaForm() {
    this.angForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl('')
    });
  }

  salvar(){
    this.apiContatoService.salvar(this.angForm.value).subscribe(
      () => {this.router.navigateByUrl('contato/index') }
    );
  }
}
