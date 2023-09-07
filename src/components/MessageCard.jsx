import React from 'react'
import { Button } from './Button'
import { copyToClipboard } from '../utils/copy'
import '../assets/css/messageCard.css'

export const MessageCard = ({text}) => {
    
    return (
        <div className='message-card'>
            {
                text ? <div className='text-area'>
                    <h2>{text}</h2>
                    <Button title='Copiar' borderColor='#0A3871' fontColor='#0A3871' onClickHandler={copyToClipboard(text)}/>
                </div>
                    : <>
                        <img src="/src/assets/images/Muneco.png" alt="Ningun mensaje encontrado" />

                        <div className='not-found-area'>
                            <h3>Ningún mensaje fue encontrado</h3>
                            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
                        </div>
                    </>
            }

        </div>
    )
}
