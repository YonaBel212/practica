import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
  standalone: false
})
export class StoriesPage implements OnInit {
  
  stories = [
    { name: 'Gio', time: 'Hace 5 minutos', image: 'assets/avatar/messi.jpg' },
    { name: 'lalo', time: 'Hace 10 minutos', image: 'assets/avatar/cr7.jpg' },
    { name: 'Neymar', time: 'Hace 15 minutos', image: 'https://source.unsplash.com/300x500/?football' },
    { name: 'Daniel', time: 'Hace 30 minutos', image: 'https://source.unsplash.com/300x500/?sports' },
    { name: 'Rodo', time: 'Hace 1 hora', image: 'https://source.unsplash.com/300x500/?athlete' },
    { name: 'Zilli', time: 'Hace 2 horas', image: 'https://source.unsplash.com/300x500/?player' },
    { name: 'Abiel', time: 'Hace 3 horas', image: 'https://source.unsplash.com/300x500/?champion' }
  ];

  constructor(private alertCtrl: AlertController, private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  async viewStory(story: any) {
    const sanitizedImage: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(
      '<img src="${story.image}" width="100%" style="border-radius: 10px;">'
    );

    const alert = await this.alertCtrl.create({
      header: story.name,
      message: sanitizedImage as string,
      buttons: ['Cerrar'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }
}