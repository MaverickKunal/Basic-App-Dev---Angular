import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './Mycomponents/tools/tools.component';
import { ToolsItemComponent } from './Mycomponents/tools-item/tools-item.component';
import { AddToolsComponent } from './Mycomponents/add-tools/add-tools.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    ToolsItemComponent,
    AddToolsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
