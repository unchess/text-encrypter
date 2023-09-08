import { encrypt } from './utils/encrypter'
import './assets/css/style.css'
import { decrypt } from './utils/decryptor'
import { Form } from './components/Form'
import { useState } from 'react'
import { MessageCard } from './components/MessageCard'
import logo from './assets/images/Logo.png'
function App() {

  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInputValue(value)
  }

  const onClickEncrypter = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setText(encrypt(value));
  }

  const onClickDecryptor = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setText((decrypt(value)))
  }

  return (
    <div className='app-container'>
      <img className='logo' src={logo} alt='Alura logo' />
      <Form
        onChangeHandler={onChangeHandler}
        onClickEncrypter={onClickEncrypter}
        onClickDecryptor={onClickDecryptor}
        inputValue={inputValue}
      />
      <MessageCard text={text}/>
    </div>
  )
}

export default App
