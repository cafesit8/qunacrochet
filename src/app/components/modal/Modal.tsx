import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import type { ModalProps } from './interface'
import { DropTownItems } from "../header/data/DropTown";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Link from 'next/link'
import './modal.css'

export default function ModalMenu ({ isOpen, onOpenChange }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      placement='bottom-center'
      onOpenChange={onOpenChange}
      backdrop="blur"
      className="bg-custom-black"
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <Link className="font-roboto-condensed pl-2 pt-4" href={'/arreglos-florales'}>Ramos</Link>
              <Link className="font-roboto-condensed pl-2" href={'/arreglos-florales'}>Macetas</Link>
              <Link className="font-roboto-condensed pl-2" href={'/arreglos-florales'}>Personajes Famosos</Link>
              <Link className="font-roboto-condensed pl-2" href={'/arreglos-florales'}>Bebés</Link>
              <Link className="font-roboto-condensed pl-2" href={'/arreglos-florales'}>Fe</Link>
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
                {DropTownItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    aria-label="Accordion 1"
                    className="text-white font-roboto-condensed head"
                    subtitle={
                      <span className="text-sm text-white font-roboto-condensed">
                        {item.name}
                      </span>
                    }
                  >
                    <ul className="flex flex-col gap-4">
                      {item.list.map((item, index) => (
                        <li key={index} className="text-sm text-white/70 cursor-pointer">
                          <Link href={item.to}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </Accordion>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal >
  )
}
