import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AwesomeService } from '../../awesome.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit, OnDestroy {
  peep: any;
  private sub: any;
  peeps: any;

  constructor(
    private route: ActivatedRoute,
    private awesomeService: AwesomeService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.peep = this.awesomeService.getPeep(id)[0];
    });
    this.peeps = this.awesomeService.getPeeps();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
