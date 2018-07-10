import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/main/about-me/about-me.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { MainComponent } from './components/main/main.component';


const appRoutes: Routes = [

  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
