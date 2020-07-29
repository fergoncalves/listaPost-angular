import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = []; 

  constructor( private postService : PostService ) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
