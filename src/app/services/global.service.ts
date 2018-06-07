import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

    public searchBarActive$: Observable<boolean>;
    private searchBarActive = false;
    private searchBarActiveSource = new Subject<boolean>();


    constructor(
    ) {
        this.searchBarActive$ = this.searchBarActiveSource.asObservable();
    }

    toggleSearchBar() {
        this.searchBarActive = !this.searchBarActive;
        console.log(this.searchBarActive);
        this.searchBarActiveSource.next(this.searchBarActive);
    }

}
