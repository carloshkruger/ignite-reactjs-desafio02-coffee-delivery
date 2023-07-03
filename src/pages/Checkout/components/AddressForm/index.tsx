import { useFormContext } from 'react-hook-form'
import * as zod from 'zod'
import { Input } from '../../../../components/Input'
import { PaymentOptionEnum } from '../PaymentOptionList'

import { AddressFormContainer } from './styles'

export const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.number({
    required_error: 'Informe o número',
    invalid_type_error: 'Informe o número',
  }),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'Informe UF'),
  complement: zod.string().optional(),
  paymentOption: zod.nativeEnum(PaymentOptionEnum, {
    required_error: 'Selecione a forma de pagamento',
    invalid_type_error: 'Selecione a forma de pagamento',
  }),
})

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function AddressForm() {
  const { register, formState } = useFormContext<CheckoutFormData>()

  return (
    <AddressFormContainer>
      <Input
        id="cep"
        type="number"
        placeholder="CEP"
        maxLength={8}
        className="cep"
        error={formState.errors.cep?.message}
        {...register('cep')}
      />
      <Input
        id="street"
        type="text"
        placeholder="Rua"
        className="street"
        error={formState.errors.street?.message}
        {...register('street')}
      />
      <Input
        id="number"
        type="number"
        placeholder="Número"
        className="number"
        error={formState.errors.number?.message}
        {...register('number', { valueAsNumber: true })}
      />
      <Input
        id="complement"
        type="text"
        placeholder="Complemento"
        className="complement"
        error={formState.errors.complement?.message}
        {...register('complement')}
      />
      <Input
        id="neighborhood"
        type="text"
        placeholder="Bairro"
        className="neighborhood"
        error={formState.errors.neighborhood?.message}
        {...register('neighborhood')}
      />
      <Input
        id="city"
        type="text"
        placeholder="Cidade"
        className="city"
        error={formState.errors.city?.message}
        {...register('city')}
      />
      <Input
        id="uf"
        type="text"
        placeholder="UF"
        maxLength={2}
        className="uf"
        error={formState.errors.uf?.message}
        {...register('uf')}
      />
    </AddressFormContainer>
  )
}
