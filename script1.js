const users = [];
const getInputFieldValue = (id) => document.getElementById(id).value;

const handleRegister = () => {
  event.preventDefault();
  let strId = Math.random().toString(36).slice(2)


  let name = getInputFieldValue("name");
  let email = getInputFieldValue("email");
  let password = getInputFieldValue("password");
  const user = {
    name: name,
    id:strId,
    createdAt:new Date(),
    email: email,
    password: password,
  };
  
  var emailRigix = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

  if(emailRigix.test(email) && password.length>5 ){
    
    users.push(user);
    console.log(user);
    const strObj = JSON.stringify(users)
    localStorage.setItem("myObj",strObj)
        notify("user sucessfully Registerd", "success")
      window.location.href = '/Login.html';


    // alert("User sucessfully Registerd")
  }else{
    // alert("enter valid email or password")
    notify("enter valid email or password","error")
    
  }


};

const handleLogin = () => {
  const storedObj =  localStorage.getItem("myObj")
  const obj = JSON.parse(storedObj)
  let email1 = getInputFieldValue("email");
  let password1 = getInputFieldValue("password");

  const user = obj.find((user) => user.email == email1 && user.password == password1);
  console.log(email1);
  console.log(password1);

  if (user) {
    notify("Login successful", "success");
    setTimeout(() => {
      window.location.href = '/ToDoMeangement.html';
    }, 1000);
  } else {
    // alert("Login unsuccessful");
    notify("Login unsuccessful","error")
  }
};

const notify = (msg, type) => {
  let color = "";
  switch (type) {
    case "success":
      color = "linear-gradient(to right, #00b09b, #96c93d)";
      break;
    case "error":
      color = "linear-gradient(to right, #ff5733, #c60c30)";
      break;
    default:
      color = "#000";
  }
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
  }).showToast();
};
type="text/javascript"
src="https://cdn.jsdelivr.net/npm/toastify-js"