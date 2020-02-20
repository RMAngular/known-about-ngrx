import { Component, OnInit, Input } from '@angular/core';
import { BlogView } from '@state/blog/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  @Input() blogs: BlogView[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
