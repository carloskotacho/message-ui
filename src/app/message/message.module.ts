import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { MessageRegisterComponent } from './message-register/message-register.component';
import { MessageSearchComponent } from './message-search/message-search.component';

@NgModule({
  imports: [
    CommonModule,

    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule,
    CardModule
  ],
  declarations: [
    MessageRegisterComponent,
    MessageSearchComponent
  ],
  exports: [
    MessageRegisterComponent,
    MessageSearchComponent
  ]
})
export class MessageModule { }
