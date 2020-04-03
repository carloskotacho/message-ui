import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { TooltipModule } from 'primeng/tooltip';

import { MessageRegisterComponent } from './message-register/message-register.component';
import { MessageSearchComponent } from './message-search/message-search.component';
import { MessageViewComponent } from './message-view/message-view.component';

@NgModule({
  imports: [
    CommonModule,

    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    TooltipModule
  ],
  declarations: [
    MessageRegisterComponent,
    MessageSearchComponent,
    MessageViewComponent
  ],
  exports: [
    MessageRegisterComponent,
    MessageSearchComponent,
    MessageViewComponent
  ]
})
export class MessageModule { }
