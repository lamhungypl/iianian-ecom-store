import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../shared/components/index';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

export const routes = [{ path: '', component: HomeComponent, pathMatch: 'full' }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ComponentsModule,
    TranslateModule.forChild(),
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
