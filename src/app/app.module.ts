import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { SericeExampleComponent } from './serice-example/serice-example.component';
import { RouterModule, Routes } from '@angular/router';
import {PlayerDetailsService} from './player-details.service'

const appRoutes: Routes = [
		  { path: 'ServicesExample', component: SericeExampleComponent  }
]; 
@NgModule({
  declarations: [
    AppComponent,
    SericeExampleComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
