import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Kosar } from '../models/Kosar';

@Injectable({
  providedIn: 'root'
})
export class ArukService {
  collectionName = 'Kosar';

  constructor(private afs: AngularFirestore) { }

create(kosar: Kosar) {
  kosar.id = this.afs.createId();
  return this.afs.collection<Kosar>(this.collectionName).doc(kosar.id).set(kosar);
}

getAll() {
  return this.afs.collection<Kosar>(this.collectionName).valueChanges();
}

update(kosar: Kosar) {
  return this.afs.collection<Kosar>(this.collectionName).doc(kosar.id).set(kosar);
}

delete(id: string) {
  return this.afs.collection<Kosar>(this.collectionName).doc(id).delete();
}

}