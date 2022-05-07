import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder ,Validators} from '@angular/forms';
import { async, Observable } from 'rxjs';
import { ArukService } from 'src/app/shared/services/aruk.service';
import { Kosar } from '../../shared/models/Kosar';

@Component({
  selector: 'app-aruk',
  templateUrl: './aruk.component.html',
  styleUrls: ['./aruk.component.scss']
})
export class ArukComponent implements OnInit {

  tartalom?: Observable<any>;


  constructor(private db: AngularFirestore,private fb: FormBuilder,private arukService: ArukService) { }


  ngOnInit(): void {
      this.tartalom = this.db.collection('Images').valueChanges();

  }

  kosarba(_id: string, _aru_nev: any){
    _id = this.db.createId();
    this.db.collection('Kosar').doc(_id).set({id:_id,aru_nev:_aru_nev});
   
  }

}
