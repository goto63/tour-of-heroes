import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroDetailRoutingModule } from 'app/hero-detail/hero-detail-routing.module';
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HeroDetailRoutingModule
  ],
  bootstrap: [HeroDetailComponent]
})
export class HeroDetailModule { }
