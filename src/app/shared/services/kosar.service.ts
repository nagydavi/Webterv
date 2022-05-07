import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Kosar } from '../models/Kosar';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  constructor(private afs: AngularFirestore) {
  }
    
    collectionName = 'Kosar';

  

  // CRUD (Create, Read, Update, Delete)

  getByEmail(email: string) {
    return this.afs.collection<Kosar>(this.collectionName).doc(email);
  }

  getAll() {
    return this.afs.collection<Kosar>(this.collectionName).valueChanges();
}

  delete(id: string) {
    return this.afs.collection<Kosar>(this.collectionName).doc(id).delete();
  }
   
}
