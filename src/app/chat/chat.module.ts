import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe} from './../shared/pipe/remove-special-char-pipe';
import {UserDetailsComponent} from '../shared/user-details/user-details.component';



@NgModule({
  declarations: [ ChatBoxComponent,RemoveSpecialCharPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path: 'chat', component: ChatBoxComponent}
    ]),
    SharedModule
  ]
})
export class ChatModule {}
