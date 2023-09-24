import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShareVariableService } from './services/share-variable.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TrabajosComponent,
    HomepageComponent,
    ExperienciaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [
    ShareVariableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
