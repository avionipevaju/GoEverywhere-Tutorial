import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CaptureComponent } from './capture/capture.component';

const appRoutes: Routes = [
  {path: '', component: IntroductionComponent, pathMatch: 'full'},
  {path: 'capture', component: CaptureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    IntroductionComponent,
    CaptureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
