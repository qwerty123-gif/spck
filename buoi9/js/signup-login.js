import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
    const firebaseConfig = {
      apiKey: "AIzaSyC_5p6AIAxwbK4jJL3TrzOT1M0M78QV8AA",
      authDomain: "authentication-app-6e873.firebaseapp.com",
      databaseURL: "https://authentication-app-6e873-default-rtdb.firebaseio.com",
      projectId: "authentication-app-6e873",
      storageBucket: "authentication-app-6e873.appspot.com",
      messagingSenderId: "176251487324",
      appId: "1:176251487324:web:be943a5f30daa8c34a9299"
    };  
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    document.getElementById("signup-btn").addEventListener('click',(e)=>{
        e.preventDefault()
      var email=document.getElementById('signup-email').value;
      var password=document.getElementById('signup-password').value;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      alert('Sign Up Successful')
      window.location.href='./../html/signup-login.html'
      const user = userCredential.user;
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      });
    })


    document.getElementById("login-btn").addEventListener('click',(e)=>{
        e.preventDefault()
      var email=document.getElementById('login-email').value;
      var password=document.getElementById('login-password').value;
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      alert('Log In Successful')
      window.location.href='./../html/trangchu.html'
      const user = userCredential.user;
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      });
    })