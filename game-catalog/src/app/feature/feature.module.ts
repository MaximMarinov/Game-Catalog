import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './game/details/details.component';
import { GaugeModule } from 'angular-gauge';
import { AppRoutingModule } from '../app-routing.module';
import { TabsComponent } from './game/tabs/tabs.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    GaugeModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureModule { }
