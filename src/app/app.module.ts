import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { Parallax2Component } from './components/parallax2/parallax2.component';
import { FeatureIconsComponent } from './components/feature-icons/feature-icons.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    FeatureComponent,
    ParallaxComponent,
    Parallax2Component,
    FeatureIconsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ParallaxScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
