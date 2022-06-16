import { Component, OnInit } from '@angular/core';
import { Iwork } from '../model/work';
import { WorkService } from '../services/work.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  works!: Iwork[]
  constructor(
    private router : ActivatedRoute,
    private workService : WorkService,
  ) { 
  }

  ngOnInit(): void {
    this.getWork()
  }
  getWork(){
    this.workService.listWork().subscribe(data => {
      this.works = data;
    })
}
}
