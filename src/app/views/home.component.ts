import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const addLive = document.getElementsByClassName('add_live')

    addLive[0].addEventListener('click', () => {

      let element:any = document.getElementsByClassName('cont_dialog');
    
      element[0].style.opacity = '1';
      element[0].style.zIndex = '999';
      
    })

  }

}
