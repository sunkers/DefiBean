import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', component: AppComponent },  {
  path: 'page2',
  loadChildren: () =>
    import('./features/home/page2/page2.module').then((m) => m.Page2Module),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
