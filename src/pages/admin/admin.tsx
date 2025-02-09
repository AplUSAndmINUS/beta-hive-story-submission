import React from 'react';

import Accordion from '../../components/accordion/accordion';
import InputType from '../../components/form-elements/input/input-type';

const PromptsFC: React.FC = () => {
  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        <InputType name='input' isDisabled={false} label='Prompt 1' />
        <InputType name='input' isDisabled={false} label='Prompt 2' />
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        <InputType name='input' isDisabled={false} label='Prompt 3' />
        <InputType name='input' isDisabled={false} label='Prompt 4' />
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        <InputType name='input' isDisabled={false} label='Prompt 5' />
        <InputType name='input' isDisabled={false} label='Prompt 6' />
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        <InputType name='input' isDisabled={false} label='Prompt 7' />
        <InputType name='input' isDisabled={false} label='Prompt 8' />
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        <InputType name='input' isDisabled={false} label='Prompt 9' />
        <InputType name='input' isDisabled={false} label='Prompt 10' />
      </div>
    </>
  );
};

export const AdminPage: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mt-4 mb-4'>Admin</h1>
      </div>
      {/* Specify the prompts, then add image upload options */}
      {/* Next need to do the beta hive options with image upload */}
      <div className='row'>
        <Accordion
          accordionTerms='Beta HIVE Options'
          collapseNumber='collapseTwo'
        >
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <InputType
              name='input'
              isDisabled={false}
              label='Beta HIVE 1'
              isImageUpload
            />
            <InputType
              name='input'
              isDisabled={false}
              label='Beta HIVE 2'
              isImageUpload
            />
          </div>
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <InputType
              name='input'
              isDisabled={false}
              label='Beta HIVE 3'
              isImageUpload
            />
            <InputType
              name='input'
              isDisabled={false}
              label='Beta HIVE 4'
              isImageUpload
            />
          </div>
        </Accordion>
      </div>{' '}
      <div className='row'>
        <Accordion
          accordionTerms='Specify Prompts'
          collapseNumber='collapseOne'
        >
          <PromptsFC />
        </Accordion>
      </div>
      <div className='row'>
        <Accordion
          accordionTerms='Content Warnings'
          collapseNumber='collapseThree'
        >
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <InputType name='input' isDisabled={false} label='CW 1' />
            <InputType name='input' isDisabled={false} label='CW 2' />
          </div>
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <InputType name='input' isDisabled={false} label='CW 3' />
            <InputType name='input' isDisabled={false} label='CW 4' />
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default AdminPage;
