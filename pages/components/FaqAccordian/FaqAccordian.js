import React from "react";
import { Accordion } from "@nextui-org/accordion";
import { AccordionItem } from "@nextui-org/accordion";
import styles from './FaqAccordian.module.css'
export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  // {styles.accItem `{${data-open}? 'addBag':'null'}`}
  return (
    <Accordion>
      <AccordionItem className={`${styles.accItem} p-4 bg-stone-300`} key="1" aria-label="Accordion 1" title="1. What are the reqs for renting a car?">
        <p>To rent a car from Long Drive Cars, you need to be at least 21 years old, have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
      <AccordionItem className={`${styles.accItem} p-4 bg-stone-300`} key="2" aria-label="Accordion 1" title="2. What Incase of any damage to the car ?">
        <p>Incase of damage Rent Amount No Refund &
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
      <AccordionItem className={`${styles.accItem} p-4 bg-stone-300`} key="3" aria-label="Accordion 1" title="3. What are the reqs for renting a car?">
        <p>To rent a car from Long Drive Cars, you need to be at least 21 years old,
          have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
    </Accordion>
  );
}