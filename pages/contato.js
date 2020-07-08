import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'
import styles from '../components/Layout/styles.module.css'

const Contato = ()=>{
    return(
        <div className='pt-6'>
            <PageTitle title='Contato' />            
            <h1 className={styles.h1Page}>Anote nosso WhatsAp:</h1>
            <p className='text-center mb-6'>
                <p className='text-center font-bold my-2 text-2xl'>(32) 99999-0999 </p>
            </p>
        </div>
    )
}

export default Contato