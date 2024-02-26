import { Control, FieldValues, Path, useController } from 'react-hook-form'

export type UeControllerFormType<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
}

export const useControllerForm = <T extends FieldValues>({
  name,
  control,
}: UeControllerFormType<T>) => {
  const {
    field: { value },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name,
    control,
  })

  return { value, invalid, errors }
}
