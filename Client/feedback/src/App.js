import './App.css';
import { useState } from "react";
import Smile from './components/Smile';
import Cloud from './components/Cloud';
import { addFeedback } from './actions';
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const form = {
      name: name,
      email: email,
      message: message
    }
    dispatch(addFeedback(form));
  }

  return (
    <>
      <Smile id="pink-1" color="#F472B7" size="300" />
      <Smile id="pink-2" color="#F472B7" size="300" />
      <Smile id="yellow-1" color="#FAD34F" size="100" />
      <Smile id="yellow-2" color="#FAD34F" size="150" />
      <Smile id="yellow-3" color="#FAD34F" size="100" />
      <Smile id="green" color="#46EBB0" size="200" />
      <div class="circular--portrait">
        <img src="img.png" />
      </div>
      <Cloud id="cloud-1" color="#C6C6C6" size="200" />
      <Cloud id="cloud-2" color="#C6C6C6" size="200" />
      <Cloud id="cloud-3" color="#C6C6C6" size="200" />
      <Cloud id="cloud-4" color="#C6C6C6" size="200" />
      <Cloud id="cloud-5" color="#C6C6C6" size="150" />
      <Cloud id="cloud-6" color="#C6C6C6" size="100" />
      <Cloud id="cloud-7" color="#C6C6C6" size="150" />
      <svg id="sun" viewBox="0 0 200 200" width="100" height="100" >
        <circle cx="80" cy="82" r="70" fill="#FAD34F" />
      </svg>
      <div id='form'>
        <div id='text'>Reach out to us!</div>
        <form onSubmit={submitHandler}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name*" required />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail*" required />
          <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message*" required />
          <button type='submit'>Send message</button>
        </form>
      </div>
      <div id='footer'>
        <div className='icon'>
          <FontAwesomeIcon className='icons' icon={faLinkedinIn} />
          <FontAwesomeIcon className='icons' icon={faTwitter} />
          <FontAwesomeIcon className='icons' icon={faFacebook} />
          <FontAwesomeIcon className='icons' icon={faPinterest} />
        </div>
      </div>
    </>
  );
}

export default App;
