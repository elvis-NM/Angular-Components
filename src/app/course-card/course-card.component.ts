import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{
  
  @Input({
    required:true
  })
  course:Course;
 
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  
  ngOnInit(): void {
    //
  }

 onCourseViewed(){
 console.log("Card component - click event bubbled");
 this.courseEmitter.emit(this.course);
 }

}

