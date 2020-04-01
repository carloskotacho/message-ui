import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.css']
})
export class MessageSearchComponent implements OnInit {

  items: MenuItem[];
  messages = [];

  constructor() { }

  ngOnInit() {

    this.messages = [
      { name: 'Katherine May', email: 'katherine@hotmail.com', category: 'Sugestão', status: 'open' },
      { name: 'Brandon Williams', email: 'brandonw@hotmail.com', category: 'Reclamação', status: 'pending' },
      { name: 'Lara Cohen', email: 'larac@hotmail.com', category: 'Dúvida', status: 'closed' },
      { name: 'Carmelita Marsham', email: 'carmelitamar@hotmail.com', category: 'Elogios', status: 'pending' },
      { name: 'Gvozden Boskovsky', email: 'gvozden@hotmail.com', category: 'Solicitação', status: 'open' },
      { name: 'Athar Makakooti', email: 'atharm@hotmail.com', category: 'Denúncia', status: 'closed' },
      { name: 'Olisha Farmer', email: 'olishaf@hotmail.com', category: 'Reclamação', status: 'open' },
      { name: 'Tokunaga Yae', email: 'tokunaga@hotmail.com', category: 'Outro', status: 'pending' },
    ];

  }

}
