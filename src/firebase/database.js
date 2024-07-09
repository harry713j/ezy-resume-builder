import { db } from "./config";
import { getDocs, collection, addDoc } from "firebase/firestore";

// user:
const createUser = async (user, fullName) => {
  try {
    // store the user details in the fire-store
    const userData = await addDoc(collection(db, "users"), {
      userId: user?.uid,
      fullName: fullName,
      email: user?.email,
    });
  } catch (error) {
    throw new Error(
      `Failed to create user data in collection : ${error.message}`
    );
  }
};

const createUserWithGoogle = async (user) => {
  try {
    // check the user is details already exist in database
    const isUserExist = await getUser(user?.uid);
    // store the user details in the fire-store
    if (!isUserExist) {
      const userData = await addDoc(collection(db, "users"), {
        userId: user?.uid,
        fullName: user?.displayName,
        email: user?.email,
      });
    }
  } catch (error) {
    throw new Error(
      `Failed to create user data in collection with google : ${error.message}`
    );
  }
};

const getUser = async (userId) => {
  try {
    //fetch the user from fire-store
    const querySnapshot = await getDocs(collection(db, "users"));

    const userList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const user = userList.find((data) => data.userId === userId);

    // console.log("user : ", user);
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to get user : ${error.message}`);
  }
};

// resume details:

export { getUser, createUser, createUserWithGoogle };
