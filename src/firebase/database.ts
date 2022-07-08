import { child, get, getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "./firabase.config";
import { User } from "../interfaces";

export async function readUsersData(userId: string = ''): Promise<User[]> {
  const dbRef = ref(getDatabase(firebaseApp));
  const data = await get(child(dbRef, `users/${userId}`));
  if (data.exists()) {
    return data.val();
  } else {
    console.log("No existe.");
    return [{} as User];
  }
}

/* const getUsers = async () => {
  const db = getDatabase();
  const starCountRef = ref(db, 'users/');
  onValue(starCountRef, (snapshot) => {
    const userList = snapshot.val();
    const keys = Object.keys(userList);
    setUsers(
      Object.values<User>(userList).map((u, i) => (
      <div key={ keys[i] }>
        <h1>{ u.email }</h1>
        <h1>{ u.userName }</h1>
        <img src={ u.profilePicture } alt={ u.profilePicture } />
      </div>
      ))
    );
  });
} */

export function writeUserData(userId: string, name: string, email: string, imageUrl: string) {
  const db = getDatabase(firebaseApp);
  set(ref(db, 'users/' + userId), {
    userName: name,
    email,
    profilePicture: imageUrl
  });
}