import { FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import { FieldValues } from 'react-hook-form'

import { UeControllerFormType, useControllerForm } from '../hook'

const InputForm = <T extends FieldValues>({ control, name }: UeControllerFormType<T>) => {
  const { invalid } = useControllerForm({ name, control })

  return (
    <FormControl isInvalid={invalid}>
      <Input />
    </FormControl>
  )
}

export default InputForm
