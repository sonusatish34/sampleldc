import React from "react";
import { Accordion } from "@nextui-org/accordion";
import { AccordionItem } from "@nextui-org/accordion";
import styles from './FaqAccordian.module.css'
export default function App() {
  
  return (
    <Accordion className="" >
      <AccordionItem className={`${styles.accItem} p-2 bg-blue-100 mx-8`} key="1" aria-label="Accordion 1" title="1. What are the reqs for renting a car?">
        <p className="text-left">To rent a car from Long Drive Cars, you need to be at least 21 years old, have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
      <AccordionItem className={`${styles.accItem} p-2 bg-blue-100 mx-8 `} key="2" aria-label="Accordion 1" title="2. What Incase of any damage to the car ?">
        <p className="text-left">Incase of damage Rent Amount No Refund &
          No adjustment for another car booking
          For damage Upto 2 Lakhs
          No insurance will be applied
          Customer has to Pay 2 Lakh rupees
          if damage more than 2 Lakhs customer has to Pay 2 Lakhs rupees
          if basic protection taken he has to pay 20000
          if premium protection taken he has to pay 10000
          Customer has to bring FIR copy from police station
          Customer has to keep his driving license to applying insurance
          Customer has to visit police station & for insurance company verification
          many times until the insurance process is completed
          .</p>
      </AccordionItem>
      <AccordionItem className={`${styles.accItem} p-2 bg-blue-100 mx-8`} key="3" aria-label="Accordion 1" title="3. What are the reqs for renting a car?">
        <p className="text-left">To rent a car from Long Drive Cars, you need to be at least 21 years old,
          have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
    </Accordion>
  );
}