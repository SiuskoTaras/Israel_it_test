import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../../models/todo';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TodoTableService {

  constructor(private http: HttpClient) {
  }

  getToDoList(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(environment.urlToDo, headerOption);
  }

  deleteToDo(id: number): Observable<ToDo> {
    return this.http.delete<ToDo>(`${environment.urlToDo}/${id}`, headerOption);
  }

  createToDo(newToDo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(environment.urlToDo, newToDo, headerOption);
  }

  updateToDo(updatedToDo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(`${environment.urlToDo}/${updatedToDo.id}`, updatedToDo, headerOption);
  }
}
