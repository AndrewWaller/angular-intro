import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AmiibosComponent } from './components/amiibos/amiibos.component';
import { AmiiboComponent } from "./components/amiibo/amiibo.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'amiibos', component: AmiibosComponent },
  { path: 'amiibo/:id', component: AmiiboComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
