import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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

    this.getLives();

    const act_link = document.getElementsByClassName('atv') as HTMLCollectionOf<HTMLElement>
    const contents:any = document.getElementsByClassName('content') as HTMLCollectionOf<HTMLElement>
    const lineBtn:any = document.getElementsByClassName('line') as HTMLCollectionOf<HTMLElement>
    

        act_link[0].addEventListener('click', () => {
            contents[0].style.transform = 'translateX(0%)';
            contents[1].style.transform = 'translateX(-150%)';   

            if(lineBtn[0].classList.contains('LineAtv')){
             }else{
              lineBtn[0].classList.add('LineAtv')
              lineBtn[1].classList.remove('LineAtv')
             }

        })

        act_link[1].addEventListener('click', () => {
            
            contents[1].style.transform = 'translateX(0%)';
            contents[0].style.transform = 'translateX(-150%)';

            if(lineBtn[1].classList.contains('LineAtv')){
             }else{
              lineBtn[1].classList.add('LineAtv')
              lineBtn[0].classList.remove('LineAtv')
             }

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

    // const elements:any = document.querySelectorAll('.width-js p')
    // const LIMIT = 15

    // for(let p of elements){
    //   const AboveLimit = p[0].innerText.length >  LIMIT;
    //   const DostsOrPonts:any = AboveLimit ? "..." : '';
    //   p[0].innerText = p[0].innerText.substring(0, LIMIT) + DostsOrPonts
    // }

  }


  //  
  

  getLives(){ 

    this.liveService.getLiveWithFlag('next').subscribe(data => {
      this.livesNext = data.content;

        this.livesNext.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
        });

    });

    this.liveService.getLiveWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
     
        this.livesPrevious.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
        });

    });

  }

  // setpx(){
  //   const lines = document.getElementsByClassName('line_bottom') as HTMLCollectionOf<HTMLElement>
  //   lines[0].style.transform = 'translateX(0px)'
  // }

  // setrd(){
  //   const lines = document.getElementsByClassName('line_bottom') as HTMLCollectionOf<HTMLElement>
  //   lines[0].style.transform = 'translateX(150px)'
  // }


}
