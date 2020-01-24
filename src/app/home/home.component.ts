import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {map} from "rxjs/operators";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    firstYearGroups$: Observable<Course[]>;

    secondYearGroups$: Observable<Course[]>;

    thirdYearGroups$: Observable<Course[]>;

    fourthYearGroups$: Observable<Course[]>;
    
    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {

        const courses$ = this.coursesService.findAllCourses();

        this.firstYearGroups$ = courses$.pipe(
          map(courses => courses.filter(course => course.category === '2019') )
        );

        this.secondYearGroups$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === '2018') )
        );
        
        this.thirdYearGroups$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === '2017') )
        );

        this.fourthYearGroups$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === '2016') )
        );

    }

}
