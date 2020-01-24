import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";
import {LessonsDataSource} from "../services/lessons.datasource";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;
    hz: any;
    dataSource: LessonsDataSource;

    displayedColumns= ["seqNo", "name", "date1",  "date2", "date3", "date4", "date5", "KPI"];
    //  , "three","four" 
    // ,"five","six" ,"seven","eight","nine","ten","eleven"
    // ,"twelve","thirteen", "fourteen", "fifteen"];

    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    @ViewChild(MatSort, { static: false }) sort: MatSort;

    @ViewChild('input', { static: false }) input: ElementRef;

    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService,
                private http: HttpClient) {

    }

    ngOnInit() {
        this.http.get('https://api.spotify.com/v1/albums/20-01').subscribe((res: any) => {
            this.hz = res.data;
        });

        this.course = this.route.snapshot.data["course"];

        this.dataSource = new LessonsDataSource(this.coursesService);

        this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadLessonsPage();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadLessonsPage())
        )
        .subscribe();

    }

    loadLessonsPage() {
        this.dataSource.loadLessons(
            this.course.id,
            this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }


}
