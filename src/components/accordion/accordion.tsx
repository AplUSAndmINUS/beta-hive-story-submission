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
        <h3
          className='accordion-header bd-title mb-0'
          id={`heading${collapseNumber}`}
        >
          <button
            className='accordion-button fs-4'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#collapse${collapseNumber}`}
            aria-expanded='true'
            aria-controls={`collapse${collapseNumber}`}
          >
            {accordionTerms}
          </button>
        </h3>
        <div
          id={`collapse${collapseNumber}`}
          className={`accordion-collapse collapse ${
            collapseNumber === 'collapseOne' ? 'show' : ''
          }`}
          aria-labelledby={`heading${collapseNumber}`}
          data-bs-parent={`#accordionExample${collapseNumber}`}
        >
          <div className='accordion-body bg-light'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
