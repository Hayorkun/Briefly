import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { setDoc, doc } from "firebase/firestore";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (fullName, email, password) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCred.user;

      await updateProfile(user, { display: fullName });

      await setDoc(doc(db, "user", user.uid), {
        uid: user.uid,
        display: fullName,
        email: email,
      });

    } catch (error) {
      throw {
        message: "Error creating user",
        originalError: error,
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
