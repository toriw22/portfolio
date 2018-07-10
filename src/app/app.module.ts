import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeComponent } from './components/main/about-me/about-me.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
