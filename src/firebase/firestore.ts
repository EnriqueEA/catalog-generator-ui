import { addDoc, collection, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { firebaseApp } from "./firabase.config";

const db = getFirestore(firebaseApp);

export async function createCollection<T>(path: string, body: T): Promise<void> {
   try {
      await addDoc(collection(db, path), body);
   } catch (error) {
      console.error(error);
   }
}

export async function getCollections<T>(path: string): Promise<T[]> {
   const querySnapshot = await getDocs(collection(db, path));
   let obj;
   return querySnapshot.docs.map(doc => {
      obj = doc.data();
      obj.id = doc.id;
      return obj as T;
   });
}

export async function getCollection<T>(path: string): Promise<T | null> {
   const snapshot = await getDoc(doc(db, path));
   if (snapshot.exists()) {
      const data = snapshot.data();
      data.id = snapshot.id;
      return data as T;
   } else {
      console.error("No existe " + snapshot.id);
      return null;
   }
}

export async function updateCollection<T>(path: string, body: T): Promise<void> {
   try {
      const pat = doc(db, path);
      await updateDoc(pat, body);;
   } catch (error) {
      console.error(error);
   }
}