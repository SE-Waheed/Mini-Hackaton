let data = [];
const getInputFieldValue = (id) => document.getElementById(id).value;

const handleAdd = ()=>{
  // const storedObj =  localStorage.getItem("id")
  event.preventDefault();
  // const obj = JSON.parse(storedObj)
  let title = getInputFieldValue("title");
  let discription = getInputFieldValue("discription");
  let date = getInputFieldValue("date");
  let strId = Math.random().toString(36).slice(2)

  const Modifyuser ={
    title,
    discription,
    date,
    id:strId,
    createdAt:new Date(),
    status:"Active"

  }
  data.push(Modifyuser)
  console.log(data)
  notify("user Sucessfully added", "success")

  // console.log(obj)
}
const handleView = ()=>{
  event.preventDefault();

  console.log(data)

} 
const handleMenage = ()=>{
  event.preventDefault();

  const title1 = "newtitle"
      const updateUser = data.map((Modifyuser , i) =>{
        if(Modifyuser.title === "title1"){
          notify("user updated", "success")
          return {...Modifyuser, title:title1}

        }
        else{
          notify("user not found", "error")
        }

      })
      console.log(updateUser)
      
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
