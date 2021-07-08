import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  
  //private http 
  // we can also set access-specifier below in  constructor and can use it all over within the class
  constructor(private service : PostService) {     
  }
  
  ngOnInit(): void {
    this.service.getAll().subscribe(post =>
      this.posts = post,
    
    //comment becoz using global error
    // error => {
    //   alert('An unexpected error occurred.');
    //   console.log(error);
    // }
    );
  }

  createPost(input : HTMLInputElement){
    let post = {title : input.value};
    this.posts.splice(0,0,post); 
    input.value = '';
    this.service.create(post).subscribe(response =>{
      post['id'] = response['id'];
    },(error : Response) => {
      this.posts.splice(0,1); 
      if(error.status === 400){
        //this.form.setErrors(error.json());
      }else{
         //comment becoz using global error
        //alert('An unexpected error occurred.');
        //console.log(error);

        throw error
      }
    });
  }

  updatePost(post){
    //used to update entire properties
    // this.http.patch(this.url,JSON.stringify(post))
    // used to update for few properties   
    this.service.update(post).subscribe(response => {
      console.log(response);
    },error => {
      alert('An unexpected error occurred.');
      console.log(error);
    })

  }

  deletePost(post){    
    this.service.delete(post.id).subscribe(response =>{
      console.log(response);
      let index = this.posts.indexOf(post);
      console.log(index);
      this.posts.splice(index,1)
    },(error: Response) => {
      /*if(error.status == 404)
        alert('This post has already been deleted.')
      
      else{        
        //alert('An unexpected error occurred.');
        
       // console.log(error);
       throw error
      }*/

      if(error instanceof NotFoundError)  
        alert('This Post Is Already Been Deleted');  
      else {  
        alert('An Unexpected Error Occured.');  
        console.log(error);  
      }  
    })
  }

}
