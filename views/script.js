

document.addEventListener('DOMContentLoaded', getAppointment);


document.getElementById("submitbtn").addEventListener("click",(event)=>{
  event.preventDefault()
  addAppointment();
});


async function editAppointment(e){
  const elements=e.parentElement.parentElement.parentElement.children;
  const id=elements[0].textContent;
  console.log(id)
  const olddata=await axios.get('http://localhost:3300/'+id);
  //console.log(olddata)
  document.querySelector('#username').value=olddata.data.username;
  document.querySelector('#email').value=olddata.data.email;
  document.querySelector('#phoneno').value=olddata.data.phoneno;
  await axios.get('http://localhost:3300/delete/'+id);
}



async function deleteAppointment(e){
  const elements=e.parentElement.parentElement.parentElement.children;
  const id=elements[0].textContent;
  console.log(id)
  await axios.get('http://localhost:3300/delete/'+id);
  getAppointment();
}

async function getAppointment(){
  try{
      let obj=await axios.get('http://localhost:3300/');
      console.log('inside axios get');
      console.log(obj)
      displayHome(obj.data);
  }catch(err){
      console.log(err);
  }
  
}


async function addAppointment(){
  //e.preventDefault();
  let username = document.querySelector('#username').value;
  let email = document.querySelector('#email').value;
  let phoneno = document.querySelector('#phoneno').value;

  let obj = {
      "username": username,
      "email": email,
      "phoneno": phoneno,
  }

  try {
    console.log('inside try');
    console.log(obj);
    await axios.post('http://localhost:3300/addAppointment', obj);
    location.reload();
    } catch (err) {
    console.log(err);
  }

}

async function displayHome(obj){

  let listParent = document.querySelector('.list-group');
  let listChildren = document.querySelectorAll('.list-group-item');
  listChildren.forEach((listChild)=>{
    listChild.remove();
  })

  let text = "";

  for (let i = 0; i < obj.length; i++) {
        text += `<li class="list-group-item"><div id="itemID" style="display: none;">${obj[i].id}</div> 
        <div class="row align-items-center">
        <div class="col">Name : ${obj[i].username}</div>
        <div class="col">Email : ${obj[i].email}</div>
        <div class="col">Phone : ${obj[i].phoneno}</div>
        <div class="col"><button type="button" class="btn btn-primary edit" >Edit</button>
            <button type="button" class="btn btn-primary delete">Delete</button>
            

    </div>
           
    </li>`;
    }

    listParent.innerHTML = text;
    let editbtns=document.querySelectorAll(".edit");
    editbtns.forEach((editbtn)=>{
      editbtn.addEventListener("click",(event)=>{
        editAppointment(editbtn);
      });
    })

    let deletebtns=document.querySelectorAll(".delete");
    deletebtns.forEach((deletebtn)=>{
      deletebtn.addEventListener("click",(event)=>{
        deleteAppointment(deletebtn);
      });
    })
};


