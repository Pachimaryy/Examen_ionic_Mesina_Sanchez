import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docSnapshots, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private firestore : Firestore
  ) { }

  getAllDocuments (path:string){
    const notesRef = collection(this.firestore, path);
    return getDocs(notesRef);
  }

  getDocument(path: string, id:any){
    const docRef = doc(this.firestore, path, id);
    return getDoc(docRef);
  }

  addDocuemnt(path:string, document:any){
    const docRef = collection(this.firestore, path);
    console.log("Documento agregado");
    return addDoc(docRef,document);

  }

  updateDocument(updateData:any, path:string, id:string){
    const docRef = doc(this.firestore, path, id);
    return updateDoc(docRef, updateData);
  }

  deleteDocument(path:string, id:string){
    const docRef = doc(this.firestore, path, id);
    return deleteDoc(docRef);
  }
}
