import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Calificacion,Calificar,Login,LoginResponse,NPS } from "./Interfases/Calificaciones";

@Injectable({providedIn: 'root'})

export class NPSService{
    private _http = inject(HttpClient);

    getCalificaciones(): Observable<Calificacion[]>{
        return this._http.get<Calificacion[]>('https://localhost:7113/api/calificaciones');
    }

    getresultadosNPS(): Observable<NPS[]>{
        return this._http.get<NPS[]>('https://localhost:7113/api/resultadosNPS');
    }

    insertarCalificacion(calificacion:Calificar): Observable<string> {
        return this._http.post<string>('https://localhost:7113/api/insertarCalificacion',calificacion)
    }

    login(login:Login): Observable<LoginResponse>{
        return this._http.post<LoginResponse>('https://localhost:7113/api/login',login)
    }
}


