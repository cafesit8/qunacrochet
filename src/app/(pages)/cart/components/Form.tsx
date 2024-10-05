import { Input } from '@nextui-org/input'
import { DatePicker } from '@nextui-org/date-picker'
import { Button } from '@nextui-org/button'
import { FaWhatsapp } from "react-icons/fa6";
import { useForm } from 'react-hook-form'
import type { Product } from '../page';

export default function Form ({ total, sendData }: { total: number, sendData: (data: Product) => void }) {
  const { register, handleSubmit, formState: { errors }, setValue, trigger } = useForm<Product>()

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
      <Button type='submit' isDisabled={Object.keys(errors).length > 0} className='bg-[#28d367] font-roboto-condensed text-lg w-full text-white' endContent={<FaWhatsapp />}>
        Solicitar
      </Button>
    </form>
  )
}
