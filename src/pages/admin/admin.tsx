import React from 'react';

import InputType from '../../components/form-elements/input/input-type';

export const AdminPage: React.FC = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='bd-title pb-2 mt-4 mb-4'>Admin</h1>
      </div>

      {/* Specify the prompts, then add image upload options */}
      {/* Next need to do the beta hive options with image upload */}
      <div className='row'>
        <h3 className='bd-title pb-2'>Specify the prompts</h3>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <InputType name='input' isDisabled={false} label='Prompt 1' />
          <InputType name='input' isDisabled={false} label='Prompt 2' />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <InputType name='input' isDisabled={false} label='Prompt 3' />
          <InputType name='input' isDisabled={false} label='Prompt 4' />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <InputType name='input' isDisabled={false} label='Prompt 5' />
          <InputType name='input' isDisabled={false} label='Prompt 6' />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <InputType name='input' isDisabled={false} label='Prompt 7' />
          <InputType name='input' isDisabled={false} label='Prompt 8' />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <InputType name='input' isDisabled={false} label='Prompt 9' />
          <InputType name='input' isDisabled={false} label='Prompt 10' />
        </div>
      </div>
      <div className='row'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <InputType name='input' isDisabled={false} label='Prompt 11' />
          <InputType name='input' isDisabled={false} label='Prompt 12' />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
