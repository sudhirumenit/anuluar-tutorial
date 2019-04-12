import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost/angular/april-19/tutorial/intro2angular/test/file.php')
    
  }

}
