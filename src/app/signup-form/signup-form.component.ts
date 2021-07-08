import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../author.service';
import { UsernameValidators } from './username.validator';

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    // form = new FormGroup({
    //   username : new FormControl('',Validators.required),
    //   password : new FormControl('',Validators.required)
    // })

    //Multiple validation error

    // form = new FormGroup({
    //     username: new FormControl('', [
    //         Validators.required,
    //         Validators.minLength(3),
    //         UsernameValidators.cannotContainSpace,
    //     ],[ UsernameValidators.shouldBeUnique]),

    //     password: new FormControl('', Validators.required)
    // })

    // get username() {
    //     return this.form.get('username');
    // }


    //Nested form groups

    form = new FormGroup({
        account : new FormGroup({
            username : new FormControl(''),
            password : new FormControl('')
        })
    })

    get username() {
        return this.form.get('account.username');
    }

   
    login(){
        //setting form level error
        this.form.setErrors({ 
            invalidLogin : false
        })

        // //control level form
        // this.username.setErrors({
        //     invalidLogin : true
        // })
    }
}
