import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'
import styles from '../components/Layout/styles.module.css'

const Pesquisa = () =>{
    const [form, setForm] = useState({
        Nome:'',
        Email:'',
        Whatsapp:'',
        Nota:0
    })

    const notas = [0, 1 ,2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const validate = ()=>{

            if ((form.Nome) && (form.Whatsapp) && (form.Nota) ){
                document.getElementById("warningMessage").innerHTML  = "<span>Cadastrando...</span><br />";                
                save()
            }
            else{

                document.getElementById("warningMessage").textContent = "Preencha ao menos Nome, WhatsApp e dê sua nota!"; 
            }
    }
    const save = async() =>{        
        try{
            const response =  await fetch('/api/save', {
                method:'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSucess(true)    
            setRetorno(data)
        }catch(err){            
        }
    }

    const onChange = evt =>{
        const value = evt.target.value  
        const key = evt.target.name   
        setForm(old => ({       
           ...old,
           [key]:value
        }))
    }

    return(
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className={styles.h1Page}>Críticas e sugestões</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            { !sucess &&
                <div className='w-1/5 mx-auto'>
                    <label className={styles.label}>Seu nome:</label>
                    <input className={styles.input} type='text' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
                    <label className={styles.label}>E-mail:</label>                
                    <input className={styles.input} type='text' placeholder='Email'onChange={onChange} name='Email'value={form.Email}/>  
                    <label className={styles.label}>WhatsApp:</label>                              
                    <input className={styles.input} type='text' placeholder='WhatsApp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>                                
                    <label className={styles.label}>Nota:</label>      
                    <div className='flex py-6'>
                        {
                            notas.map(nota => {
                                return (<label className='block w-1/6 text-center'>
                                            {nota}<br />
                                            <input type='radio' name='Nota'  value={nota} onChange={onChange}/>
                                        </label>
                                        )
                            }
                            )
                        }
                    </div>
                    <div id="warningMessage" className={styles.warningMessage} role="alert">                         
                    </div>                    

                    <button className='bg-blue-400  px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow flex items-center mx-auto' onClick={validate}>Salvar</button>
                </div>
            }
            { sucess  &&
                <div className='w-1/5 mx-auto '>
                    <p className={styles.thanks}>Obrigado por contribuir com sua sugestão ou crítica!</p>
                    {
                       retorno.showCupon && 
                       <div className={styles.coupon}>
                           Seu cupom: <br />
                           <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                       </div>

                    }
                    {
                       retorno.showCupon && 
                       <div className='text-center border p-4 mb-4'>
                           
                           <span className='font-bold block mb-2'>{retorno.Promo}</span>
                           <br />
                           <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                       </div>
                    }                    
               
                </div>
            }
        </div>
    )
}

export default Pesquisa