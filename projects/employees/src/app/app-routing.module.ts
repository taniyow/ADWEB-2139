import { NgModule } from '@angular/core';

// Import RouterModule and Routes
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';

// Set the Route Paths
const routes: Routes = [
  { path: 'emplist1', component: Emplist1Component },
  { path: 'emplist2', component: Emplist2Component },
  { path: 'emplist3', component: Emplist3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
