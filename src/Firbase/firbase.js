import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiXlrUmt89Fcn1ik7RQ9mdzBsEvKQbA1E",
  authDomain: "phone-otp-357ed.firebaseapp.com",
  projectId: "phone-otp-357ed",
  storageBucket: "phone-otp-357ed.appspot.com",
  messagingSenderId: "1011935798317",
  appId: "1:1011935798317:web:624503212ec0dc7ca6c4a4"
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