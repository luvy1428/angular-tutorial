import { Component } from '@angular/core';
import { CourseService} from './courses.services';

@Component({
  selector: 'courses',
  template: `
  {{text| summary : 10}} 
  `
})
export class CoursesComponent {
  text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry`
}


