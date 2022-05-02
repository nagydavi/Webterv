import { Component, OnInit ,Input , Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment } from 'src/app/shared/models/Comment';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  //commentObject: Comment={};
  comments: Array<Comment>=[];

  commentsForm = this.createFrom({
    username: '',
    comment:'',
    date: new Date()

  });
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  createFrom(model: Comment){
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }
  
  addComment(){
    if(this.commentsForm.get('username') && this.commentsForm.get('comment')){
      this.commentsForm.get('date')?.setValue(new Date());
      //this.comments.push({ ...this.commentsForm.value });
      this.comments.push(Object.assign({},this.commentsForm.value));
      
    }
    
  }

}
