import { Component } from '@angular/core';
import { MyDet } from './shared/models/det.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'laba11';
  dets = [];
  dets_amount=10;

  id:number;

  constructor(){
    
    for (let i=0; i<=(this.dets_amount-1); i++)
    {
      this.dets[i]=new MyDet();
      this.dets[i].id=i+1;
      this.dets[i].name='Датчик №'+(i+1);
      if (Math.floor(Math.random() * Math.floor(2))==0){
        this.dets[i].status=false;
      }
      else {
        this.dets[i].status=true;
      }

    }
  }


  deleteCard(mas,element){
    mas.splice(mas.indexOf(element), 1);
  }

  addCard(mas,element,status){
    let new_elem = mas.push(new MyDet());
    console.log(new_elem);
    mas[new_elem-1].id=element;
    mas[new_elem-1].name='Датчик №'+(element);
    mas[new_elem-1].status=status;
    console.log(mas);
    return false;
    
  }
}
