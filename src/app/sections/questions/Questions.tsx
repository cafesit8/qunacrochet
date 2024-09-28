'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Questions () {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
          <AccordionItem key="1" aria-label="Accordion 1" title="Pregunta 1">
            <p className="text-custom-black font-roboto-condensed">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Pregunta 2">
            <p className="text-custom-black">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Pregunta 3">
            <p className="text-custom-black">{defaultContent}</p>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
