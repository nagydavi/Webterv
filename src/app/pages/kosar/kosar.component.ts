import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { KosarService } from '../../shared/services/kosar.service';


@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.scss']
})
export class KosarComponent implements OnInit {

  tartalom?: Observable<any>;

  constructor(private db: AngularFirestore,private kosarService: KosarService,private auth: AuthService) { }

  ngOnInit(): void {
    this.tartalom = this.db.collection('Kosar').valueChanges();
  }
  rendelLead(id: string){
  return this.kosarService.delete(id);
  }
  
  
}
