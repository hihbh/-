 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // إعدادات Firebase الخاصة بتطبيقك (تم أخذها من صورتك)
const firebaseConfig = {
  apiKey: "AIzaSyCi3kaK-cwafM8q4jgKBUcqqxtTnKrnC78",
  authDomain: "code-mark-2eb98.firebaseapp.com",
  projectId: "code-mark-2eb98",
  storageBucket: "code-mark-2eb98.firebasestorage.app",
  messagingSenderId: "543549417748",
  appId: "1:543549417748:web:8ea96075caadc8e8c2fa01",
  measurementId: "G-J4M1MXTSWV"
};

// تهيئة Firebase بالإصدار المتوافق مع الـ Scripts المستدعاة في صفحتك
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}