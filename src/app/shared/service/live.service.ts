import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../model/live.model';
import { ResponsePageable } from '../model/responsePageable.model';


@Injectable({
  providedIn: 'root'
})
export class LiveService {

    apiUrl = 'http://localhost:8080/lives';

    httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };

  constructor(
    private httpClient: HttpClient
  ) { }


  public getLiveWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public postLives(live: any): Observable<Live> {
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOption );
  }

  public DeletLiveWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

}
