import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationComponent } from './modules/translation/translation.component';
import { LandingComponent } from './modules/pages/landing/landing.component';

const routes: Routes = [
  { path: 'about', component: LandingComponent  },
  { path: 'translator', component: TranslationComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
