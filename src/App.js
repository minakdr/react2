import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


const [ name , setname] = useState("")
const[ lastName , setlastName ] = useState("")
const [ phoneNumber , setphoneNumber] = useState("")
const [ email , setemail] = useState("")
const [ message , setmessage ] = useState("")


function  submitForm(e) {
e.preventDefault();

}


  return (

    <div className="App" >
      <h1> Contact us</h1>
      <p> Thank you for reaching out! You just need to fill out the form below and then we'll get in touch  </p>

      <form >
        <div className='row' >
        <label htmlFor="name">name</label>
        <input type="text"  name='name' id='name'  value={name} 
        onChange={(e)=> {
        setname(e.target.value) ;
        }}
        />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' id='lastName' value={lastName}
        
        onChange={(e) => {
          setlastName(e.target.value);
        }}
        />
        </div>


        <div className='row' >
        <label htmlFor="phoneNumber">phone number</label>
        <input type="number" id='phoneNumber' name='phoneNumber'  value={phoneNumber}
        onChange={(e)=>{
          setphoneNumber(e.target.value)
        }}
        />

        <label htmlFor="email">email</label>
        <input type="email" name='email' id='email' value={email}
        onChange={(e) => {
          setemail(e.target.value)
        } }

        />
        </div>



      <label htmlFor="message">message</label>
      <textarea  value={message} onChange={(e)=>{
        setmessage(e.target.value)
      }}  name="message" id="message"   ></textarea>



      <button onClick={
        (e) => {
          submitForm(e)
        }
      }>
        Envoyer 
      </button>
      </form>
      <div className='infos'>
        <p>Thank you for your message , now fill the following fields with your personal infos to get the chance to win an IPhone 15 Pro Max </p>
        <form>
         <label htmlFor="nb of kids"></label>
         






        </form>
      </div>

      
    </div>








  );
}

export default App;
