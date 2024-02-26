'use client'

import { FormLabel, Button } from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import InputForm from '@/src/features/Form/components/Input'

type LoginFormData = {
  email: string
  password: string
}

const REQUIRED_EMAIL_MESSAGE = '※ メールアドレスを入力してください'
const REQUIRED_PASSWORD_MESSAGE = '※ パスワードを入力してください'

const schema = z.object({
  email: z
    .string({
      invalid_type_error: REQUIRED_EMAIL_MESSAGE,
      required_error: REQUIRED_EMAIL_MESSAGE,
    })
    .min(1, REQUIRED_EMAIL_MESSAGE)
    .email('※ 正しいメールアドレスを入力してください'),
  password: z
    .string({
      invalid_type_error: REQUIRED_PASSWORD_MESSAGE,
      required_error: REQUIRED_PASSWORD_MESSAGE,
    })
    .min(1, REQUIRED_PASSWORD_MESSAGE),
})

export default function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  const test = useCallback(() => {
    console.log('発火')
  }, [])
  return (
    <form>
      <FormLabel htmlFor='email'>メールアドレス</FormLabel>
      <InputForm control={control} name='email' />
      <ErrorMessage errors={errors} name='email' />
      <FormLabel htmlFor='password'>パスワード</FormLabel>
      <InputForm control={control} name='password' />
      <ErrorMessage errors={errors} name='password' />
      <Button onClick={handleSubmit(test)}>ログイン</Button>
    </form>
  )
}
