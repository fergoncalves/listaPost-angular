import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post = null; // atributo que guardará o post

  // injetando um objeto para usar as APIs (que tem o metodo getPosts e params)
  constructor( private postService : PostService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    
    // recebendo parâmetro que vem no link
    let postId = 0;
    this.route.params.subscribe(params => {
      postId = params['id'];
    });

    // usando o serviço de receber posts para pegar o post desejado
    this.postService.getAllPosts().subscribe(data => {
      this.post = data.find(element => element.id == postId);
    });

  }

}
