import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-olvide-contra',
  templateUrl: './olvide-contra.page.html',
  styleUrls: ['./olvide-contra.page.scss'],
})
export class OlvideContraPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  async presentAlert(){
    const alert = this.alertCtrl.create({
      header: 'Enviado',
      subHeader: 'Se ha enviado el enlace a su correo.',
      buttons: [{
        text: 'Ok',
        handler: ()=>{
        location.href="/ingresar"
        }
      }]
     }).then(alert=> alert.present());
  }

  ngOnInit() {
  }

}
