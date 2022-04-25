import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';


@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious!: Live[];
  livesNext!: Live[];


  constructor(
    public liveService: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.getLives()

    const act_link = document.getElementsByClassName('atv') as HTMLCollectionOf<HTMLElement>
    const contents:any = document.getElementsByClassName('content') as HTMLCollectionOf<HTMLElement>
    

        act_link[0].addEventListener('click', () => {
            contents[0].style.transform = 'translateX(0%)';
            contents[1].style.transform = 'translateX(110%)';    
        })

        act_link[1].addEventListener('click', () => {
            
            contents[1].style.transform = 'translateX(0%)';
            contents[0].style.transform = 'translateX(-110%)';
        })

        // // // // // 

    const btn = document.getElementsByClassName('btns')
    const target = document.getElementsByClassName('cont_dialog') as HTMLCollectionOf<HTMLElement>

    btn[0].childNodes[0].addEventListener('click', () => {
      target[0].style.opacity = '0';
      target[0].style.zIndex = '-999'
    })

    btn[0].childNodes[1].addEventListener('click', () => {
      console.log('botão de Adicionar')
    })

  }

  getLives(){

    this.liveService.getLiveWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
  
        this.livesNext.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
        });

    });

    this.liveService.getLiveWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content
     
        this.livesPrevious.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
        });

    });

  }

}
