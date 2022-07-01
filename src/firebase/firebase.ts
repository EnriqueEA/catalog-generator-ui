import { FirebaseOptions, initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { User } from "../interfaces/User";

const dotEnv = process.env;

const firebaseConfig: FirebaseOptions = {
  apiKey: dotEnv.API_KEY,
  authDomain: dotEnv.AUTH_DOMAIN,
  databaseURL: dotEnv.DATABASE_URL,
  projectId: dotEnv.PROJECT_ID,
  storageBucket: dotEnv.STORAGE_BUCKET,
  messagingSenderId: dotEnv.MESSAGING_SENDER_ID,
  appId: dotEnv.APP_ID,
  measurementId: dotEnv.MEASUREMENT_ID
};

initializeApp(firebaseConfig);

export async function readUsersData(userId: string = ''): Promise<User[]> {
  const dbRef = ref(getDatabase());
  const data = await get(child(dbRef, `users/${userId}`))
  if (data.exists()) {
    return data.val();
  } else {
    console.log("No existe.");
    return [{}];
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
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    userName: name,
    email,
    profilePicture: imageUrl
  });
}