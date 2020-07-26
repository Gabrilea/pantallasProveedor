import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-ingresa-estable',
  templateUrl: './ingresa-estable.page.html',
  styleUrls: ['./ingresa-estable.page.scss'],
})
export class IngresaEstablePage implements OnInit {

  
  locationWatchStarted:boolean;
  locationSubscription:any;
  locationTrace=[];

  nombre:string;
  archivo:File;
  giro:string;
  direccion:string;
  comprobante1:File;
  comprobante2:File;

  constructor(private geolocation: Geolocation, private loadingCtrl:LoadingController, private camera:Camera) { }

  file:File;

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
  img1:any;

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
  }
        
  
  


}
