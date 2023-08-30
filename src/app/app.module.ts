import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component'; //las importaciones individuales, si se importa como módulo no es necesario
// import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent //hay que importarlo aqui para poder usarlo
     //así se importaría de manera individual, si importamos los módulos como abajo no es necesario

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule, //para importar los módulos que creamos (ver counter.module.ts en counter)
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
