import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: 'Home', link: '' },
    { name: 'Rent', link: 'rent' },
    { name: 'Buy', link: 'buy' }
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/menu.svg')
    );
    iconRegistry.addSvgIcon(
      'buy',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/buy.svg')
    );
    iconRegistry.addSvgIcon(
      'rent',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/rent.svg')
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  rent() {
    this.router.navigateByUrl('rent');
  }
  buy() {
    this.router.navigateByUrl('buy');
  }
}
