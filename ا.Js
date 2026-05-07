// إعدادات Firebase من واقع الصور الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyCi3kaK-cwafM8q4jgKBUcqqxtTnKrnC78",
  authDomain: "code-mark-2eb98.firebaseapp.com",
  // الرابط ده هو اللي هيخلي البيانات تظهر في الـ Console عندك
  databaseURL: "https://code-mark-2eb98-default-rtdb.firebaseio.com", 
  projectId: "code-mark-2eb98",
  storageBucket: "code-mark-2eb98.firebasestorage.app",
  messagingSenderId: "543549417748",
  appId: "1:543549417748:web:8ea96075caadc8e8c2fa01",
  measurementId: "G-J4M1MXTSWV"
};

// تهيئة Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}