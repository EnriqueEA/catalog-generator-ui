import { getStorage, ref, uploadBytes, uploadBytesResumable, UploadTask } from "firebase/storage";
import { firebaseApp } from "./firabase.config";

const storage = getStorage(firebaseApp);

export function uploadFile(image: File) {
   const storageRef = ref(storage, `images/${image.name}`);
   uploadBytes(storageRef, image).then(s => console.log(s));
}

export const uploadFileResumable = (image: File, path = "images"): UploadTask => {
   const date = new Date();
   const fileName = `MotoPartBikers-${date.toISOString()}`;
   const storageRef = ref(storage, `${path}/${fileName}`);
   return uploadBytesResumable(storageRef, image);
}
