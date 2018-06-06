// import { SpinnerService } from './spinner.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class MovieListService {
    // index = 1;
    constructor(private http: HttpClient) {

    }

    public getMovies(index): Observable<any> {
        return this.http.get('./../assets/API/CONTENTLISTINGPAGE-PAGE' + index + '.json');
    }
}
