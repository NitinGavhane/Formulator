import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TemplateComponent } from './template/template.component';
import { TemplateHistoryComponent } from './template-history/template-history.component';
import { AboutComponent } from './about/about.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ShareTemplateComponent } from './share-template/share-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TemplateComponent,
    TemplateHistoryComponent,
    AboutComponent,
    HowToUseComponent,
    ShareTemplateComponent
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
