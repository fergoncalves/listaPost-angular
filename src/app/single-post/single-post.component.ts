import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post = null;

 
  constructor( private postService : PostService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    
  
    let postId = 0;
    this.route.params.subscribe(params => {
      postId = params['id'];
    });

    this.postService.getAllPosts().subscribe(data => {
      this.post = data.find(element => element.id == postId);
    });

  }

}
