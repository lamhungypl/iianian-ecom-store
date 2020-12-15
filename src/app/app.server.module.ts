import { DefaultComponent } from './../default/default.component';
import { DefaultModule } from './../default/default.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@NgModule({
  imports: [DefaultModule, ServerModule, ModuleMapLoaderModule, FlexLayoutServerModule],
  bootstrap: [DefaultComponent],
})
export class AppServerModule {}
