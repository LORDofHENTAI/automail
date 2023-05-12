import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBOOKComponent } from './components/sbook/sbook.component';
import { AutomailComponent } from './components/automail/automail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'sbook', component: SBOOKComponent },
  { path: 'automail', component: AutomailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
