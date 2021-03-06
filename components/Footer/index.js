import React from 'react'
const Footer = () =>{
    return(
        <div className='bg-gray-700 p-4 mt-6'>
            <div className='containermx-auto text-center font-bold text-white'>
                Projeto desenvolvido por:{' '} 
                <a className='hover:underline' href="https://tuliofaria.net">Tulio Faria</a> / {' '}
                <a className='hover:underline' href="https://linkedin.com/in/tuliofaria">Linkedin</a> / {' '}
                <a className='hover:underline' href="https://github.com/tuliofaria">Github</a>
                <div className='mt-2'>
                    <img className='inline p-4' src="/logo_semana_fsm.png" alt="Semana Fullstack Master" />
                    <a href="https://devpleno.com" title="Conheçer o site!" alt="logo do Devpleno" target="_blank"><img className='inline p-4' src="/logo_devpleno.png" alt="devPleno" /></a>
                </div>       
            </div>
        </div>
    )
}

export default Footer