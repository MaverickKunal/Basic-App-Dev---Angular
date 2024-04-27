import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './Mycomponents/tools/tools.component';
import { AboutComponent } from './Mycomponents/about/about.component';

const routes: Routes = [
  { path: '', component: ToolsComponent },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
