import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class PapersService {

  constructor(
    private http: HttpClient,
  ) { }

  getPapers(limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get<any>(`${SERVER}/papers/`, { params: { 'limit': limit.toString(), 'offset': offset.toString() } });
  }

  findMostPopular(): Observable<any> {
    return this.http.get<any>(`${SERVER}/papers/findMostPopular`);
  }

  getPaper(id: number): Observable<any> {
    return this.http.get<any>(`${SERVER}/papers/${id}`);
  }

  addPaper(data: any): Observable<any> {
    const sendData = {
      ...data,
      author_id: 1,
      tags: ['1', '2']
    };
    return this.http.post<any>(`${SERVER}/papers/newPaper`, sendData);
  }

}
