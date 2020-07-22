import { Component, OnInit } from '@angular/core';
import { CommonSandbox } from '../../../../core/common/common.sandbox';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public commonSandbox: CommonSandbox) {}

  ngOnInit() {}
}
