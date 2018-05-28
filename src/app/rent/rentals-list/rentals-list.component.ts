import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentals-list',
  templateUrl: './rentals-list.component.html',
  styleUrls: ['./rentals-list.component.css']
})
export class RentalsListComponent implements OnInit {
  id = 1;
  constructor(private router: Router) {}

  ngOnInit() {}

  view() {
    this.router.navigate(['/rentals', this.id]);
  }
}
