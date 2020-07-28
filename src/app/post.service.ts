import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // link para a API
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // injetando um objeto para usar a API HttpCliente (que tem o método get)
  constructor( private httpService : HttpClient ) { }

  // serviço de entregar todos os posts
  getAllPosts() : Observable<Post[]> {
    return this.httpService.get<Post[]>(this.apiUrl);
  }

}
