import { Component, OnInit } from '@angular/core';
import { MovieListService } from './../services/movie-list.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public movieList: any;
    public pageNumber: number;
    constructor(private movieListService: MovieListService, ) { }

    ngOnInit() {
        this.movieListService.getMovies(1).subscribe(
            movieList => {
                console.log(movieList.page['content-items'].content)
                console.log(movieList.page['content-items'].content[0]['poster-image']);

                this.movieList = movieList.page['content-items'].content;
            }, movieListError => {
                console.log(movieListError)
            }
        );
    }
}
