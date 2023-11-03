import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docSnapshots, getDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private firestore : Firestore
  ) { }

  getDocuments (path:string){
    const notesRef = collection(this.firestore, path);
    return getDocs(notesRef);
  }

  getDocument(path: string, id:any){
    const docRef = doc(this.firestore, path, id);
    return getDoc(docRef);
  }

  addCosa (cosa:any, path:string){
    const notesRef = collection(this.firestore, path);
    return addDoc(notesRef,cosa);
  }
}
