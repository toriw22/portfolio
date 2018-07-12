import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
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
