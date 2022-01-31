import React, { useState } from 'react';
import { ContentForm } from '../layout/Form-styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationForm = yup.object().shape({
    nome: yup.string().required("* Insira um nome"),
    email: yup.string().required("* Email incorreto"),
    senha: yup.string().required("* Senha inválida"),
    menssagem: yup.string().required("* Insira alguma mensagem")
}, [])

export default function Form() 
{
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationForm)
    })

    const onSubmit = data => handleSubmit(data)

    const [click, setClick] = useState(false)

    return (
        <ContentForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Entre em contato</h1>
            <input 
                placeholder={click ? `Nome... ${errors.nome?.message}` : 'Nome...'} 
                type="text" 
                {...register('nome')} 
            />
            <input 
                placeholder={click ? `E-mail... ${errors.email?.message}` : 'E-mail...'} 
                type="email" 
                {...register('email')} 
            />
            <input 
                placeholder={click ? `Senha... ${errors.senha?.message}` : 'Senha...'} 
                type="password" 
                {...register('senha')} 
            />
            <textarea 
                placeholder={click ? `Menssagem... ${errors.menssagem?.message}` : 'Menssagem...'} 
                type="text" 
                {...register('menssagem')} 
            />

            <button onClick={() => setClick(!click)} type='submit'>Enviar menssagem</button>
        </ContentForm>
    )
}