import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiZC94MvHyJf5S4Eo1EVFxDQxY2-TKl1E",
  authDomain: "saathchallo.firebaseapp.com",
  projectId: "saathchallo",
  storageBucket: "saathchallo.appspot.com",
  messagingSenderId: "495808524845",
  appId: "1:495808524845:web:759ea4c04b1142ae4c7ea4",
  measurementId: "G-PH92KTSX95"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBRhprJlgtp8sI52hjzsfNU_Hy1hhNPa4U",
//   authDomain: "captone-4af5a.firebaseapp.com",
//   projectId: "captone-4af5a",
//   storageBucket: "captone-4af5a.appspot.com",
//   messagingSenderId: "320128457804",
//   appId: "1:320128457804:web:1b9102783fb2af83c568e9",
//   measurementId: "G-QPV5BZ8ZBS"
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);