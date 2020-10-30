import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoxComponent } from './box/box.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlessingsComponent } from './blessings/blessings.component';




const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
     path: 'game' , component: BoardComponent
  },
  {
    path: 'about' , component: AboutComponent
  },
  {
    path: 'blessings', component: BlessingsComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoxComponent,
    HomeComponent,
    AboutComponent,
    BlessingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
