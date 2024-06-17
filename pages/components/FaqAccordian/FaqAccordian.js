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
      <AccordionItem className={`${styles.accItem} p-4 bg-stone-300` } key="1" aria-label="Accordion 1" title="1. What are the reqs for renting a car?">
        <p>To rent a car from Long Drive Cars, you need to be at least 21 years old,
        have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
      <AccordionItem className={`${styles.accItem} p-4 bg-stone-300` }  key="2" aria-label="Accordion 1" title="2. What are the reqs for renting a car?">
        <p>To rent a car from Long Drive Cars, you need to be at least 21 years old,
        have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
      <AccordionItem className={`${styles.accItem} p-4 bg-stone-300` }  key="3" aria-label="Accordion 1" title="3. What are the reqs for renting a car?">
        <p>To rent a car from Long Drive Cars, you need to be at least 21 years old,
        have a valid driver's licence, and Aadhaar Card.</p>
      </AccordionItem>
    </Accordion>
  );
}