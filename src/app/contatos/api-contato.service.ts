import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contato } from './Contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiContatoService {
  url: string = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  listar() : Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url);
  }

  buscar(id : Number) : Observable<Contato> {
    return this.http.get<Contato>(this.url + '/' + id)
  }

  salvar(contato : Contato) : Observable<any> {
    return this.http.post<Contato>(this.url + '/add', contato)
  }
}
