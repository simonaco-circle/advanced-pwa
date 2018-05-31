import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwesomeService } from '../../awesome.service';

@Component({
  selector: 'app-rentals-list',
  templateUrl: './rentals-list.component.html',
  styleUrls: ['./rentals-list.component.css']
})
export class RentalsListComponent implements OnInit {
  peeps: any;
  id = 1;
  constructor(private router: Router, private awesomeService: AwesomeService) {}

  ngOnInit() {
    this.peeps = this.awesomeService.getPeeps();
  }

  view(peep) {
    this.router.navigate(['/speakers', peep.id]);
  }
}
