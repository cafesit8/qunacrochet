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
              <Link onClick={() => onOpenChange(false)} className="font-roboto-condensed text-white pl-2 text-base pt-4" href={'/ramos'}>Ramos</Link>
              <Link onClick={() => onOpenChange(false)} className="font-roboto-condensed text-white pl-2 text-base" href={'/ramos-premiun'}>Ramos Premiun</Link>
              <Link onClick={() => onOpenChange(false)} className="font-roboto-condensed text-white pl-2 text-base" href={'/personalizados'}>Personalizados</Link>
              <Link onClick={() => onOpenChange(false)} className="font-roboto-condensed text-white pl-2 text-base" href={'/personajes-famosos'}>Personajes Famosos</Link>
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
                      <span className="text-base text-white font-roboto-condensed">
                        {item.name}
                      </span>
                    }
                  >
                    <ul className="flex flex-col gap-4 pb-5">
                      {item.list.map((item, index) => (
                        <li key={index} className="text-sm text-white/70 cursor-pointer">
                          <Link onClick={() => onOpenChange(false)} href={item.to}>{item.name}</Link>
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
