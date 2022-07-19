import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' // Utilizando template externo
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                preco: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 3.5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                preco: 45.99,
                code: 'LKL-1094',
                duration: 90,
                rating: 4.6,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }

}