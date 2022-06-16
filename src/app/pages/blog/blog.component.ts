import { Component, OnInit } from '@angular/core';
import { Iblog } from 'src/app/model/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs!: Iblog[]
  constructor(
    private router : ActivatedRoute,
    private blogService : BlogService,
  ) { 
  }

  ngOnInit(): void {
    this.getWork()
  }
  getWork(){
    this.blogService.listBlog().subscribe(data => {
      this.blogs = data;
    })
}

}
