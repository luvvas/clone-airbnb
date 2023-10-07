'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        toast.error('Alguma coisa deu errado')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title="Bem-vindo ao Airbnb" subtitle="Crie uma conta!"/>
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="name" label="Nome" disabled={isLoading} register={register} errors={errors} required />
      <Input type="password" id="password" label="Senha" disabled={isLoading} register={register} errors={errors} required />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button 
        outline 
        label="Continuar com Google" 
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button 
        outline 
        label="Continuar com Github" 
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className='justify-center text-center flex flex-row items-center gap-2'>
          <div>
            Já tem uma conta?
          </div>
          <div 
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Entrar
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal