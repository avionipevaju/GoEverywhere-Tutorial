import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CaptureComponent } from './capture/capture.component';
import { CaptureStonesComponent } from './capture-stones/capture-stones.component';
import { IllegalMovesComponent } from './illegal-moves/illegal-moves.component';

const appRoutes: Routes = [
  {path: '', component: IntroductionComponent, pathMatch: 'full'},
  {path: 'capture', component: CaptureComponent},
  {path: 'capture-stones', component: CaptureStonesComponent},
  {path: 'illegal-moves', component: IllegalMovesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    IntroductionComponent,
    CaptureComponent,
    CaptureStonesComponent,
    IllegalMovesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
