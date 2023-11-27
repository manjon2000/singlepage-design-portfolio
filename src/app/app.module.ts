import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { GridColumnsComponent } from './components/grid-columns/grid-columns.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { MyWorkComponent } from './components/layouts/my-work/my-work.component';
import { SliderComponent } from './components/slider/slider.component';
import { CtaComponent } from './components/cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    GridColumnsComponent,
    AboutComponent,
    MyWorkComponent,
    SliderComponent,
    CtaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
