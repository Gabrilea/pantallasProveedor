import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.page.html',
  styleUrls: ['./problemas.page.scss'],
})
export class ProblemasPage implements OnInit {

  constructor(private loadingCtrl:LoadingController) { }

  async presentLoading(){
    const loading=await this.loadingCtrl.create({
      message:'Espere',
      duration:500
    });
    return await loading.present();
  }

  ngOnInit() {
  }

}
