import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css']
})
export class NewCourseForm2Component {
  form;
  // form = new FormGroup({
  //   topics : new FormArray([])
  // });


  constructor(fb: FormBuilder){
    this.form = fb.group({
      name : ['',Validators.required],
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.array([])
    })
  }

  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic : FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics')as FormArray;
  }

}
