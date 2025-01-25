import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawingBoardComponent } from './drawing-board/drawing-board.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, DrawingBoardComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
