


// إعدادات Firebase النسخة المستقرة المتوافقة مع مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyCi3kaK-cwafM8q4jgKBUcqqxtTnKrnC78",
  authDomain: "code-mark-2eb98.firebaseapp.com",
  // السطر ده هو اللي ناقصك عشان البيانات تظهر في الصورة التانية
  databaseURL: "https://code-mark-2eb98-default-rtdb.firebaseio.com", 
  projectId: "code-mark-2eb98",
  storageBucket: "code-mark-2eb98.firebasestorage.app",
  messagingSenderId: "543549417748",
  appId: "1:543549417748:web:8ea96075caadc8e8c2fa01",
  measurementId: "G-J4M1MXTSWV"
};

// تهيئة الاتصال بالسحابة
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase Connected!");
}