import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';

import { MessageRegisterComponent } from './message-register/message-register.component';

@NgModule({
  imports: [
    CommonModule,

    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    ButtonModule
  ],
  declarations: [
    MessageRegisterComponent
  ],
  exports: [
    MessageRegisterComponent
  ]
})
export class MessageModule { }
