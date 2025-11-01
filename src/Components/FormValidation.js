import React,{useState} from "react";
function FormValidation(){

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// Here the above line means you set its default value as null you can change it only using onChange Handler
// This is use when we need to set props data bydefaul in Input Field

const [name,setName] = useState();
const [email,setEmail] = useState();
// Here you are not pasing any value menas it will set value automaticall you don`t need to set value


const [nameError,setNameError] = useState(false);
const [emailError,setEmailError] = useState(false);
const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const HandleName = (e) => {

let name=e.target.value;
console.log(name.length);
if(name.length < 3){
setNameError(true);
}else{
setNameError(false);
}
}

const HandleEmail = (e) => {

 let email =e.target.value;
 if(!email.match(emailRegex)){
  setEmailError(true);
 }else{
  setEmailError(false);
 }
}

const SubmitHandler = (e) => {
 e.preventDefault();
 let name = e.target[0].value;
 let email = e.target[1].value;
 console.log(name,email);
}

    return(<>
    <div>
        <h3>Form Validation</h3>
        <form onSubmit={SubmitHandler}>
         <label>Name:</label>
         <input type="text" name="name" value={name} placeholder="Enter Name" required />
         <br/><br/>
         { nameError ? <span style={{color:'red'}}> Name Should we grater than 3 char..</span> : ''}
         <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={HandleEmail} placeholder="Enter email" required />
        <br/><br/>
         {emailError ? <span style={{color:'red'}}> Please enter valid email..</span> : ''}
        <br/><br/>
        <button type="submit">Submit</button>
        <br/><br/>
        </form>
    </div>
    </>)

}

export default FormValidation