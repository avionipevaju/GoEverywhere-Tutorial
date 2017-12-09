import { BrowserModule } from '@angular/platform-browser';
import {ChangeDetectorRef, NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CaptureComponent } from './capture/capture.component';
import { LevelService } from './capture/level.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ExampleComponent } from './example/example.component';
import { LoaderService } from './example/loader.service';

const appRoutes: Routes = [
  {path: '', component: IntroductionComponent, pathMatch: 'full'},
  {path: 'capture', component: CaptureComponent},
  {path: 'example', component: ExampleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    IntroductionComponent,
    CaptureComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [LevelService, CaptureComponent, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
