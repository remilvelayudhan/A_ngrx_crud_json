import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateListComponent } from './components/Associate/associate-list/associate-list.component';

const routes: Routes = [{
  path:'',component:AssociateListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
