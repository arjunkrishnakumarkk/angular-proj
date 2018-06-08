import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieListService } from './../services/movie-list.service';
import { error } from 'util';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GlobalService } from './../services/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public movieList: any;
    public pageNumber = 1;
    public totalCount: number;
    public count = 0;
    public modalRef: BsModalRef;
    public active = false;
    searchForm: FormGroup;
    public searchResults = [];
    @ViewChild('searchModal') template: any;
    constructor(private movieListService: MovieListService,
        private modalService: BsModalService,
        private globalService: GlobalService,
        private fb: FormBuilder) {
        this.movieList = [];
        this.searchForm = this.fb.group({
            'searchKey': ['', Validators.compose([Validators.required])]
        });
    }

    ngOnInit() {
        this.listMovies(this.pageNumber);
        this.globalService.searchBarActive$.subscribe(
            status => {
                this.active = status;
                this.openModal(this.template);
            });
    }
    openModal(template: TemplateRef<any>) {
        this.movieList = [];
        this.searchResults = [];
        this.listMovies(1);
        this.listMovies(2);
        this.listMovies(3);
        this.modalRef = this.modalService.show(template);
    }
    close() {
        this.movieList = [];
        this.pageNumber = 1;
        this.count = 0;
        this.listMovies(this.pageNumber);
        this.modalRef.hide();
    }
    listMovies(index) {
        this.movieListService.getMovies(index).subscribe(
            value => {
                this.totalCount = value.page['total-content-items'];
                this.count += parseInt(value.page['page-size-returned']);
                this.movieList = this.movieList.concat(value.page['content-items'].content);
            }, error => {
                console.log(error);
            }
        );
    }

    onScroll() {
        this.pageNumber += 1;
        if (this.count < this.totalCount) {
            this.listMovies(this.pageNumber);
        }
    }

    searchMovies(event) {
        this.searchResults = [];
        const temp = this.movieList.filter(function (d) {
            return d.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 || !event.target.value.toLowerCase();
        });
        this.searchResults = temp;
    }
}
