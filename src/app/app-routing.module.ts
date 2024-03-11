import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { TemplateHistoryComponent } from './template-history/template-history.component';
import { AboutComponent } from './about/about.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { ShareTemplateComponent } from './share-template/share-template.component';


const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'template-history', component: TemplateHistoryComponent },
  { path: 'share-template', component: ShareTemplateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'how-to-use', component: HowToUseComponent },
  { path: '', redirectTo: '/template', pathMatch: 'full' } // Redirect to template by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
