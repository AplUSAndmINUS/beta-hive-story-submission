import React from 'react';

interface AccordionProps {
  accordionTerms: string;
  collapseNumber: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  accordionTerms,
  collapseNumber,
  children,
}) => {
  return (
    <div className='accordion mt-3' id={`accordionExample${collapseNumber}`}>
      <div className='accordion-item' style={{ borderRadius: '0' }}>
        <h3 className='bd-title mb-0'>
          <button
            className='accordion-button fs-4'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${collapseNumber}`}
            aria-expanded='true'
            aria-controls={collapseNumber}
          >
            {accordionTerms}
          </button>
        </h3>
        <div
          id={collapseNumber}
          className='accordion-collapse collapse show'
          data-bs-parent={`#accordionExample${collapseNumber}`}
        >
          <div className='accordion-body'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
