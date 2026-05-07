import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
// السطر القادم هو الأهم للتعامل مع قاعدة البيانات
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCi3kaK-cWafM8q4jgKBUcqqxtTnKrnC78",
  authDomain: "code-mark-2eb98.firebaseapp.com",
  databaseURL: "https://code-mark-2eb98-default-rtdb.firebaseio.com",
  projectId: "code-mark-2eb98",
  storageBucket: "code-mark-2eb98.firebasestorage.app",
  messagingSenderId: "543549417748",
  appId: "1:543549417748:web:8ea96075caadc8e8c2fa01",
  measurementId: "G-J4M1MXTSWV"
};

// تهيئة Firebase والـ Database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ربط وظائف الحفظ بـ Window عشان بقية ملفاتك تشوفها
window.saveToCloud = function(data) {
    set(ref(database, 'cm_v7_db'), data)
        .then(() => console.log("تم الحفظ في السحابة بنجاح!"))
        .catch((error) => console.error("خطأ في المزامنة:", error));
};

// استقبال البيانات تلقائياً عند تغييرها في السحابة
const dbRef = ref(database, 'cm_v7_db');
onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        localStorage.setItem('cm_v7_db', JSON.stringify(data));
        // إذا كان عندك دالة اسمها render بتحدث الصفحة استدعيها هنا
        if (typeof render === "function") render();
    }
});