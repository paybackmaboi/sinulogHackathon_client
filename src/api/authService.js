import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase"; 

// === REGISTER ===
export const registerUser = async ({ username, password, role, fullName }) => {
  try {
    // 1. Create user in Firebase Auth using the username as email
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    const user = userCredential.user;

    // 2. Save role to Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName: fullName || "User",
      email: username,
      role: role, 
      createdAt: new Date().toISOString()
    });

    return user;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

// === LOGIN ===
export const loginUser = async ({ username, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    if (userDoc.exists()) {
      return { ...userDoc.data() }; 
    } else {
      return { email: user.email, role: 'tourist' }; 
    }
  } catch (error) {
    throw error;
  }
};

// === LOGOUT ===
export const logoutUser = async () => {
  await signOut(auth);
};