import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IForumSection, IForumSubsection, IForumThread, ITokens } from '../../interfaces/apiInterfaces';
import { SERVER } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private http: HttpClient,
  ) { }

  getForumSections(): Observable<IForumSection[]> {
    return this.http.get<IForumSection[]>(`${SERVER}/forum/sections`);
  }

  getForumSubsection(subsection_id: number): Observable<IForumSubsection> {
    return this.http.get<IForumSubsection>(`${SERVER}/forum/subsection`, { params: { 'subsection_id': subsection_id.toString() } });
  }

  getForumThread(thread_id: number): Observable<IForumThread> {
    return this.http.get<IForumThread>(`${SERVER}/forum/thread`, { params: { 'thread_id': thread_id.toString() } });
  }

}
