import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQYu6vAVU4FTYnUfFqYYTZorVbN5L163Q",
  authDomain: "connekt-3d1fb.firebaseapp.com",
  projectId: "connekt-3d1fb",
  storageBucket: "connekt-3d1fb.appspot.com",
  messagingSenderId: "634108796366",
  appId: "1:634108796366:web:39a111988258058dc29f9f",
  measurementId: "G-PMV4WE8KRJ",
};

initializeApp(firebaseConfig);

export const loginWithGithub = () => {
  const auth = getAuth();
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider).then((user) => {
    const { _tokenResponse } = user;
    const { screenName, email, photoUrl } = _tokenResponse;
    return {
      username: screenName,
      avatar: photoUrl,
      email,
    };
  });
};
