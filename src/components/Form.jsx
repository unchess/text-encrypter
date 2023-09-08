import React, { useState } from 'react'
import { Button } from './Button';
import '/src/assets/css/form.css';
import warning from '../assets/images/warning-circle-svgrepo-com.svg'


export const Form = ({ onClickDecryptor, onChangeHandler, onClickEncrypter, inputValue }) => {


    return (
        <form className='form-area' onChange={onChangeHandler}>
            <textarea className='input-area' placeholder='Ingrese el texto aquí' />
            <div className='button-container'>
                <div className='warning'>
                    <img src={warning} alt="Solo letras minúsculas y sin acentos" />
                    <p>Solo letras minúsculas y sin acentos</p>
                </div>
                <div className='buttons'>
                    <Button title='Encriptar' value={inputValue} onClickHandler={onClickEncrypter} backgroundColor='#0A3871' fontColor='white' />
                    <Button title='Desencriptar' value={inputValue} onClickHandler={onClickDecryptor} />
                </div>
            </div>
        </form>
    )
}
