import { Component, OnInit } from '@angular/core';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public listSandbox: ListsSandbox) {}
  // initially calls listSandbox getPageList
  ngOnInit() {
    const params: any = {};
    params.limit = 10;
    params.offset = 0;
    params.keyword = '';
    this.listSandbox.getPageList(params);
  }
}
