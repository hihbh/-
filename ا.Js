// إعدادات Firebase الخاصة بتطبيقك
const firebaseConfig = {
  apiKey: "AIzaSyCi3kaK-cWafH8q4jgKBUcqqxtTnKrnC78",
  authDomain: "code-mark-2eb98.firebaseapp.com",
  // هذا الرابط ضروري جداً للمزامنة وهو موجود في صورة الـ Console التي أرفقتها
  databaseURL: "https://code-mark-2eb98-default-rtdb.firebaseio.com", 
  projectId: "code-mark-2eb98",
  storageBucket: "code-mark-2eb98.firebasestorage.app",
  messagingSenderId: "543549417748",
  appId: "1:543549417748:web:8ea96075caadc8e8c2fa01",
  measurementId: "G-J4M1MXTSWV"
};

// تهيئة Firebase بالنسخة المتوافقة مع السكريبتات في صفحتك (v8)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}