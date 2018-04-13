import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component'
import { AnimalDetailComponent } from './animal-detail/animal-detail.component'

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalListComponent },
  { path: 'animals/:name', component: AnimalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
