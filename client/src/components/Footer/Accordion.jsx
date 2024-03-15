import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { accordionData } from "./accordionData.js";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id, event) => {
    setOpenAccordion((prevId) => (prevId !== id ? id : null));
    if (!openAccordion) {
      const accordionContainer = event.currentTarget;
      accordionContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className='accordion_list'>
      {accordionData.map((accordion) => (
        <div
          key={accordion.id}
          onClick={(event) => toggleAccordion(accordion.id, event)}
          style={{
            paddingBottom: openAccordion === accordion.id ? "10px" : "0",
          }}
          className='accordion_list_item'
        >
          <div className='item_top'>
            <span>{accordion.label}</span>
            {openAccordion === accordion.id ? <HiMinusSmall /> : <GoPlus />}
          </div>
          <div
            className={`accordion_data ${
              openAccordion === accordion.id ? "accordion_active" : ""
            }`}
          >
            {accordion.data.map((item) => (
              <Link key={item.id}>{item.label}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
