'use client'
import { useForm } from 'react-hook-form';
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { FaWhatsapp } from "react-icons/fa6";

interface Claim {
  name: string;
  claim: string;
}

const LibroDeReclamaciones = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Claim>();

  const onSubmit = (data: Claim) => {
    // Formato del mensaje para WhatsApp
    const message = `*Reclamación*%0A` +
      `Nombre: ${data.name}%0A` +
      `Reclamación: ${data.claim}`;

    // Enlace de WhatsApp
    const whatsappUrl = `https://wa.me/521234567890?text=${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-white h-full flex items-center text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4">
        <h2 className="text-center md:text-4xl text-2xl font-bold mb-2 font-playfair">Libro de Reclamaciones</h2>
        <p className="text-center mb-5">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, Ley N° 29571, el sitio web de Quna.Crochet pone a disposición del cliente un Libro de Reclamaciones virtual a fin de que este pueda registrar sus quejas o reclamos formales sobre los servicios ofrecidos a través del portal.</p>
        <p className="text-center mb-5">Completa el siguiente formulario para presentar tu reclamación.</p>
        <form className='max-w-xl m-auto' onSubmit={handleSubmit(onSubmit)}>
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
            <Textarea
              fullWidth
              size="sm"
              label="Reclamación"
              isInvalid={Boolean(errors.claim)}
              errorMessage="Debe ingresar su reclamación"
              {...register('claim', { required: true })}
            />
          </div>
          <Button type='submit' disabled={Object.keys(errors).length > 1} className='bg-[#28d367] font-roboto-condensed text-lg w-full text-white' endContent={<FaWhatsapp />}>
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LibroDeReclamaciones;
