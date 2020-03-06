import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  @Input() components;
  
  buttons = [
    {
      id: 1,
      title: 'Comp1',
    },
    {
      id: 2,
      title: 'Comp2',
    },
    {
      id: 3,
      title: 'Comp3',
    },
    {
      id: 4,
      title: 'Comp4',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  btnClickHandler(btn, comp){
    if(btn == 1){
        document.getElementById('container').children[0].style.display='none';
    }else{      
      for(let i=1;i<=4;i++){
        document.getElementById('container').children[i-1].style.display = "block";
      }
      document.getElementById('container').children[comp-1].style.display='none';
    }

  }

}


