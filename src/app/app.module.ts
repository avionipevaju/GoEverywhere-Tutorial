import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { IntroductionComponent } from './introduction/introduction.component';

const appRoutes: Routes = [
  {path: '', component: IntroductionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
