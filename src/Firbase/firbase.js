import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// saathchallo
const firebaseConfig = {
  apiKey: "AIzaSyAiZC94MvHyJf5S4Eo1EVFxDQxY2-TKl1E",
  authDomain: "saathchallo.firebaseapp.com",
  projectId: "saathchallo",
  storageBucket: "saathchallo.appspot.com",
  messagingSenderId: "495808524845",
  appId: "1:495808524845:web:759ea4c04b1142ae4c7ea4",
  measurementId: "G-PH92KTSX95"
};
// phone-otp-357ed
// const firebaseConfig = {
//   apiKey: "AIzaSyAiXlrUmt89Fcn1ik7RQ9mdzBsEvKQbA1E",
//   authDomain: "phone-otp-357ed.firebaseapp.com",
//   projectId: "phone-otp-357ed",
//   storageBucket: "phone-otp-357ed.appspot.com",
//   messagingSenderId: "1011935798317",
//   appId: "1:1011935798317:web:624503212ec0dc7ca6c4a4"
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);