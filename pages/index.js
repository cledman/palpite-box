import React from 'react'
import Link from 'next/link'
import useSwr from 'swr'
import PageTitle from '../components/PageTitle'


const fetcher =(...args) => fetch(...args).then(res => res.json())

const Index = () =>{
    const { data, err} = useSwr('/api/get-promo', fetcher)

    return(
        <div>
            <PageTitle title='Seja bem-vindo!' />
            <p className='mt-12 text-center'>
                O restaurante X sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12 '>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p>}
            { !err && data &&   data.showCoupon   &&       
                <p className='mt-12 text-center'>
                    {data.message}
                </p>      
            }      
        </div>        
    )
    
}

export default Index