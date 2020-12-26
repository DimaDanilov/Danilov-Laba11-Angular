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

  addCard(e: any): boolean {
    const data: any = new FormData(e.target);
    const card: MyDet = {
      id: Number(data.get('id')),
      name: 'Датчик №'+ data.get('id'),
      status: data.get('status')
    };
    if (data.get('status')=='off')
      card.status = false;
    else if (data.get('status')=='on')
      card.status = true;

    // Вариант 1
      
    this.dets[this.dets.length]=new MyDet();
    this.dets[this.dets.length-1].id=card.id;
    this.dets[this.dets.length-1].name=card.name;
    this.dets[this.dets.length-1].status=card.status;
    
    // Вариант 2
    
    // this.dets.push(card);

    return false;
  }
}
