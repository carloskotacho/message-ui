import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-message-register',
  templateUrl: './message-register.component.html',
  styleUrls: ['./message-register.component.css']
})
export class MessageRegisterComponent implements OnInit {

  categories: SelectItem[];

  constructor() {
    this.categories = [
      { label: 'Categoria', value: null },
      { label: 'Reclamação', value: null },
      { label: 'Sugestão', value: null },
      { label: 'Problema', value: null },
      { label: 'Tarefa', value: null },
      { label: 'Outro', value: null }
    ];
  }

  ngOnInit() {
  }

}
