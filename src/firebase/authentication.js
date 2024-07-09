import { auth, db } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createUser, createUserWithGoogle } from "./database";

const createAccount = async ({ fullName, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // store the full name and email in database
    if (user) {
      await createUser(user, fullName);
    }
    return user;
  } catch (error) {
    throw new Error(`Account creation failed : ${error.message}`);
  }
};

const login = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return user;
  } catch (error) {
    throw new Error(`Log in failed : ${error.message}`);
  }
};

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    //console.log("google: ", user);
    if (user) {
      await createUserWithGoogle(user);
    }
    return user;
  } catch (error) {
    throw new Error(`Google log in failed : ${error.message}`);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(`Log out failed : ${error.message}`);
  }
};

export { createAccount, login, loginWithGoogle, logout };
