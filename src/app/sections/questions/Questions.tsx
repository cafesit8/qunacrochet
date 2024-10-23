'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Questions () {
  return (
    <section className="w-full h-auto bg-white px-3 text-custom-black py-32">
      <h3 className="text-center font-playfair text-4xl">PREGUNTAS FRECUENTES</h3>
      <div className="max-w-[1000px] mx-auto py-10">
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem key="1" aria-label="Accordion 1" title="¿De dónde son?">
            <p className="text-custom-black font-roboto-condensed">
              Somos una tienda virtual de Lima Metropolitana y estamos listos para ayudarte a sorprender a tu persona especial y ofrecerte bellas opciones de decoración.
            </p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="¿Hacen envíos a provincia?">
            <p className="text-custom-black font-roboto-condensed">
              Claro que sí. Realizamos envíos a nivel nacional a través de la agencia Shalom (el costo de envío es adicional y lo puede pagar cuando recoja el pedido en agencia).
            </p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="¿Cuáles son las opciones de envío dentro de Lima?">
            <p className="text-custom-black font-roboto-condensed">
              Para envíos dentro de Lima, tiene la opción de Indrive y también la agencia Shalom (con esta segunda opción, suele llegar al día siguiente de haberlo dejado en agencia). En ambos casos, el costo de envío es adicional.
            </p>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 3" title="¿Con cuánto tiempo de anticipación debo realizar mi pedido?">
            <p className="text-custom-black font-roboto-condensed">
              En Quna.Crochet, tratamos de mantener un stock pequeño de girasoles, tulipanes y algunas macetas. Sin embargo, el stock puede variar según la cantidad de pedidos. Por eso, lo recomendable es agendar su pedido con 4 ó 5 días de anticipación en caso sea para Lima y una semana, aproximadamente, de anticipación para provincia (porque se deben considerar los días que demore el pedido en llegar a su provincia).
              Recuerda que son trabajos íntegramente hechos a mano.
            </p>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 3" title="¿Cómo es la presentación de sus productos?">
            <p className="text-custom-black font-roboto-condensed">
              Quna.Crochet de preocupa por ser eco amigable, por eso, sus empaques están pensados en el respecto del medio ambiente. Los productos se envían dentro de una caja de cartón corrugado estilo cofre, decorada por dentro con papel seda.
            </p>
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 3" title="¿Cómo puedo cuidar mi detalle artesanal Quna.Crochet?">
            <p className="text-custom-black font-roboto-condensed">
              Lo ideal es que mantenga la limpieza sacudiendo el polvito que pueda haberle caído con la ayuda de un plumerito o paño suave. No debe mojar los diseños para mantenerlos en buenas condiciones. Por ejemplo, algunos de ellos tienen partes pintadas.
            </p>
          </AccordionItem>
          <AccordionItem key="7" aria-label="Accordion 3" title="¿Cómo puedo personalizar mi pedido?">
            <p className="text-custom-black font-roboto-condensed">
              Absolutamente todos nuestros productos pueden ser personalizados, desde bordar una inicial, nombre, símbolo, modificar colores, agregar prendas o detalles distintivos a los personajes, entre otros. Estaremos felices de ayudarte con la personalización para que logres un resultado único y especial.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
