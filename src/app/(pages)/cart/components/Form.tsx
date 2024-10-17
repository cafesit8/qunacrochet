import { Input } from '@nextui-org/input'
import { DatePicker } from '@nextui-org/date-picker'
import { Button } from '@nextui-org/button'
import { FaWhatsapp } from "react-icons/fa6";
import { useForm } from 'react-hook-form'
import type { ProductItem } from '../page';
import type { Product } from '@/app/(pages)/interface/Product';

export default function Form ({ total, sendData, productsList }: { total: number, sendData: (data: ProductItem) => void, productsList: Product[] }) {
  const { register, handleSubmit, formState: { errors }, setValue, trigger } = useForm<ProductItem>()

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div>
        <Input
          fullWidth
          size="sm"
          label="Nombre"
          isInvalid={Boolean(errors.name)}
          errorMessage="Debe ingresar nombre"
          {...register('name', { required: true })} />
      </div>
      <div>
        <Input
          fullWidth
          size="sm"
          label="Apellidos"
          isInvalid={Boolean(errors.surname)}
          errorMessage="Debe ingresar sus apellidos"
          {...register('surname', { required: true })}
        />
      </div>
      <div>
        <Input
          fullWidth
          size="sm"
          label="Dirección"
          isInvalid={Boolean(errors.address)}
          errorMessage="Debe ingresar su dirección"
          {...register('address', { required: true })}
        />
      </div>
      <div>
        <Input
          fullWidth
          size="sm"
          label="Provincia"
          isInvalid={Boolean(errors.province)}
          errorMessage="Debe ingresar su distrito"
          {...register('province', { required: true })}
        />
      </div>
      <div>
        <Input
          fullWidth
          size="sm"
          label="Distrito"
          isInvalid={Boolean(errors.district)}
          errorMessage="Debe ingresar su distrito"
          {...register('district', { required: true })}
        />
      </div>
      <div>
        <Input
          fullWidth
          size="sm"
          label="Número"
          type='number'
          isInvalid={Boolean(errors.number)}
          errorMessage="Ingrese un número válido"
          {...register('number', { required: true, minLength: 9, maxLength: 9 })}
        />
      </div>
      <div>
        <DatePicker
          label="Día de entrega"
          className="w-full"
          isInvalid={Boolean(errors.date)}
          errorMessage="La fecha debe ser mayor a hoy"
          {...register('date', {
            required: "Ingrese una fecha válida",
            validate: (date) => {
              const [year, month, day] = date.split('-');
              const parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return parsedDate > today || "La fecha debe ser mayor a hoy";
            }
          })}
          onChange={(newValue) => {
            const { day, month, year } = newValue;
            const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            setValue('date', formattedDate);
            trigger('date');
          }}
        />
      </div>
      <div className='w-full flex justify-between p-3 bg-[#f4f4f5] rounded-xl font-roboto-condensed mb-2'>
        <span>Total:</span>
        <span className='font-roboto-condensed'>S/. {total}</span>
      </div>
      <Button type='submit' isDisabled={productsList.length === 0 || Object.keys(errors).length > 0} className='bg-[#28d367] font-roboto-condensed text-lg w-full text-white' endContent={<FaWhatsapp />}>
        Solicitar
      </Button>
    </form>
  )
}
