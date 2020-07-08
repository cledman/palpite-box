import React from 'react'
import PageTitle from '../components/PageTitle'
import styles from '../components/Layout/styles.module.css'

const Sobre = ()=>{
    return(
        <div className='pt-6'>
            <PageTitle title='Sobre' />            
            <h1 className={styles.h1Page}>Restaurante X</h1>
            <p className='text-center mb-6'>
                <img src='/restaurant.png' alt='restaurante' className='mx-auto w-40'/><br />
                Nosso restaurante é tradicional em nossa cidade, com 43 anos de atividades prestadas e muita qualidade!
            </p>
        </div>

    )
}

export default Sobre