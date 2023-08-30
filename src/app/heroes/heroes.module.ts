import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule], //necesario para ngIf, ngFor ya que estamos convirtiendo los componentes en módulos
})
export class HeroesModule {}
