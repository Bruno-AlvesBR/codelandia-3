import React, { useState } from 'react';
import { Content } from '../layout/Form-styled';
import { set, useForm } from 'react-hook-form';
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
    const toggleClick = () => setClick(true)
    return (
        <Content onSubmit={handleSubmit(onSubmit)}>
            <h1>Entre em contato</h1>
            <input name='nome' placeholder={click ? `Nome ${errors.nome?.message}` : 'Nome'} type="text" {...register('nome')} />
            <input name='email' placeholder={click ? `E-mail ${errors.email?.message}` : 'E-mail'} type="email" {...register('email')} />
            <input name='senha' placeholder={click ? `Senha ${errors.senha?.message}` : 'Senha'} type="text" {...register('senha')} />
            <textarea name='menssagem' placeholder={click ? `Menssagem... ${errors.menssagem?.message}` : 'Menssagem...'} type="text" {...register('menssagem')} />
            <button onClick={toggleClick} type='submit'>Enviar menssagem</button>
        </Content>
    )
}
