import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iian-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  public category = { name: 'Select Category' };
  @Input() categories: any;

  searchValue: any = '';

  constructor(public router: Router) {}

  ngOnInit() {}
  // seacrh the data in the product list
  public search() {
    this.router.navigate(['/products/', { keyword: this.searchValue }]);
  }

  // send the search value to product through navigation.If no value send 1 as default value.
  public onChange(value) {
    this.searchValue = value;
    if (!value) {
      this.searchValue = '';
    }
    // this.router.navigate(['/products/', { keyword: this.searchValue }]);
  }
}
