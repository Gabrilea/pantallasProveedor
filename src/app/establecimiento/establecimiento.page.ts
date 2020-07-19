import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.page.html',
  styleUrls: ['./establecimiento.page.scss'],
})
export class EstablecimientoPage implements OnInit {

  locationWatchStarted:boolean;
  locationSubscription:any;
  locationTrace=[];

  nombre:string;
  archivo:File;
  giro:string;
  direccion:string;
  comprobante1:File;
  comprobante2:File;

  constructor(private geolocation: Geolocation, private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }


  getCordinates(){
    this.geolocation.getCurrentPosition().then((resp)=>{
    this.locationTrace.push({
    latitude:resp.coords.latitude,
    longitude:resp.coords.longitude,
    accurracy:resp.coords.accuracy,
    timestamp:resp.timestamp
    });

  }).catch((error)=>{

  console.log('Error getting location', error);
  


    });

  this.locationSubscription=this.geolocation.watchPosition();
  this.locationSubscription.subscribe((resp)=>{

    this.locationWatchStarted = true;
    this.locationTrace.push({
    latitude:resp.coords.latitude,
    longitude:resp.coords.longitude,
    accurracy:resp.coords.accuracy,
    timestamp:resp.timestamp
    });
  });


  }

  

  
  
  

  vervalue(){
   
    console.log(this.nombre, this.archivo, this.giro, this.direccion, this.comprobante1, this,this.comprobante2);
    
  }
  
  


}
