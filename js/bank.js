document.getElementById("submitBtn").addEventListener('click',function(){
   const email=document.getElementById('email');
   const getEmail=email.value;
   const password=document.getElementById('password');
   const getPassword=password.value;
 if (getEmail==='arif@gmail.com' && getPassword==='1234') {
    window.location.href="inside.html"
 }
 else{
    alert("Please check your email and password twice")
 }
})