function showDiv() {
    var signin_box = document.getElementById('signin_box');
    signin_box.style.display = "block";
 }


function getDetails(form) {   
   var uname = form.username.value;
   var psw = form.password.value;
   //  alert(uname + ': ' + psw);
        
    //CHECK uname & psw IN DATABASE. 
    
    //If not in database, alert("password or username not recognised")

    //If in database, continue to game page    
 }

 function checkDetails(form) {
    var uname = form.username.value;
    var psw = form.password.value;
    alert(uname + ': ' + psw);
        
    //Send to database  
 }




const button = document.getElementById('post-btn');

button.addEventListener('click', async () => {
try {
   const username = document.getElementById('usernameElement').value;
   const password = document.getElementById('passwordElement').value;

   const response = await fetch('http://localhost:3000/api/users-check', {
      method: 'POST',
      body: JSON.stringify({
      "username": username,
      "password": password,
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   });
   const data = await response.json();
   if (data.message == "Accepted" ){
      window.location.replace("http://localhost:3000/game.html")
   }
   else{
      document.getElementById("failedSignin").style.display ="block"

   }
   // const data = await fetchResponse.json();
   // console.log(data);
   // res = JSON.parse(response);
   console.log('Completed!', data.message);






} catch(err) {
   console.error(`Error: ${err}`);
}
});


// fetch(request).then((response) => {
//     console.log(response);
//     response.js.then((data) => {
//         console.log(data)
//     })
// })
// var str = '{"hello":"world"}';
// try {
//   var obj = JSON.parse(str); // this is how you parse a string into JSON 
//   document.body.innerHTML += obj.hello;
// } catch (ex) {
//   console.error(ex);
// }


// getDevices = async () => {
//    const location = window.location.hostname;
//    const settings = {
//        method: 'POST',
//        headers: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json',
//        }
//    };
//    try {
//        const fetchResponse = await fetch(`http://${location}:9000/api/sensors/`, settings);
//        const data = await fetchResponse.json();
//        return data;
//    } catch (e) {
//        return e;
//    }    

// }
