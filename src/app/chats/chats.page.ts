import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: false
})
export class ChatsPage implements OnInit {

  chats: any[] = [
    { username: 'Yona', message: 'Hola', date: '08:30', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'gio', message: 'partidito', date: '07:20', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'daniel', message: 'hi', date: '09:45', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'lalo', message: 'se va el directo', date: '10:55', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'abiel', message: 'infiel', date: '11:15', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'talachas', message: 'bogueto', date: '12:05', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'albert', message: 'Gracias', date: '13:10', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'cris', message: '¿como estas?', date: '14:25', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'paul', message: '¿por qué?', date: '15:05', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'saul', message: 'oh wowowow', date: '16:40', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Pedro', message: 'pasame la tarea', date: '17:30', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Javi', message: 'vamos', date: '18:15', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'juan', message: 'felicidades', date: '19:20', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'aldo', message: 'vete', date: '20:00', avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    
  ];


  constructor() { }

  ngOnInit() {
  }

}
