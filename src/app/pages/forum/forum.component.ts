import { Component, OnInit ,Input , Output} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/shared/models/Comment';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  //commentObject: Comment={};
  comments: Array<Comment>=[];
  tartalom?: Observable<any>;

  commentsForm = this.createFrom({
    id: '',
    username: '',
    comment: '',
    date: 0,

  });
  
  constructor(private fb: FormBuilder, private router: Router, private db: AngularFirestore,private commentService: CommentService ) { }

  ngOnInit(): void {
   this.tartalom = this.db.collection('Comments').valueChanges();
  }
  createFrom(model: Comment){
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }
  
  addComment(){
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date().getTime());

        // SPREAD OPERATOR
        // this.comments.push({ ...this.commentsForm.value });


        // Object
        // this.comments.push(Object.assign({}, this.commentObject));
        
        // TODO: INSERT
        this.commentService.create(this.commentsForm.value).then(_ => {
          this.router.navigateByUrl('/forum' + this.commentsForm.get('username')?.value);
        }).catch(error => {
          console.error(error);
        });
      }
    }
  
  }
}
