import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
