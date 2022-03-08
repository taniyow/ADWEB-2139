import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imported Routing Module
import { RouterModule, Routes } from '@angular/router';

//imported Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

//set Paths for Routing of Components
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //add routermodule and set forRoot(routes)
  ],
  exports: [RouterModule], //set exports for routermodule
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
