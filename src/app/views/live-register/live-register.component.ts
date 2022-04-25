import { LiveService } from './../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-live-register',
  templateUrl: './live-register.component.html',
  styleUrls: ['./live-register.component.css']
})
export class LiveRegisterComponent implements OnInit {


  public liveForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private rest: LiveService
  ) { }

  ngOnInit(): void {

    this.liveForm = this.fb.group({

      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]],
      liveLink: ['', [Validators.required]]

    });

    console.log(this.liveForm)

  }


  createLive(){
     console.log(this.liveForm)
      let newDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local()
      this.liveForm.value.liveDate = newDate.format('YYYY-MM-DD') + 'T' + this.liveForm.value.liveTime;

      this.rest.postLives(this.liveForm.value).subscribe( result => {})
      console.log(this.rest)
      
  } 


  cloneForm(){

  };

  resetForm(){
    
  };



}
