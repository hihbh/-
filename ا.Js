// إعدادات Firebase الخاصة بتطبيقك
const firebaseConfig = {
  apiKey: "AIzaSyCi3kaK-cwafM8q4jgKBUcqqxtTnKrnC78",
  authDomain: "code-mark-2eb98.firebaseapp.com",
  databaseURL: "https://code-mark-2eb98-default-rtdb.firebaseio.com", // تأكد أن هذا الرابط صحيح من لوحة Firebase
  projectId: "code-mark-2eb98",
  storageBucket: "code-mark-2eb98.firebasestorage.app",
  messagingSenderId: "543549417748",
  appId: "1:543549417748:web:8ea96075caadc8e8c2fa01",
  measurementId: "G-J4M1MXTSWV"
};

// تهيئة Firebase بالنسخة المتوافقة مع السكريبتات الموجودة في index.html
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // إذا كان مهيأ مسبقاً
}