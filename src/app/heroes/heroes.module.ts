import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroesRoutingModule } from 'app/heroes/heroes-routing.module';
import { HeroesComponent } from 'app/heroes/heroes.component';

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HeroesRoutingModule
  ],
  bootstrap: [HeroesComponent]
})
export class HeroesModule { }
