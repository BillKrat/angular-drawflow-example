import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingBoardComponent } from './drawing-board/drawing-board.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
