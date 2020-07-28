import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = []; // atributo que guardará os posts

  // injetando um objeto no construtor para usar a API PostService (que tem o metodo getAllPosts)
  constructor( private postService : PostService ) { }

  ngOnInit(): void {
    //usando o serviço para receber os posts
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
