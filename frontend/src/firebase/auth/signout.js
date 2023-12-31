import firebase_app from "../config";
import { getAuth, signOut as signOutFirebase } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signOut() {
    let result = null,
        error = null;
    try {
        result = await signOutFirebase(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}