import React from 'react';

const AddBtn = () => {
  return (
    <div className='buttons'>
      <li>
        <a
          href='#tech-list-modal'
          className='btn-floating btn-large green modal-trigger'
        >
          <i className='material-icons'>person</i>
        </a>
      </li>
      <li>
        <a
          href='#add-tech-modal'
          className='btn-floating btn-large red modal-trigger'
        >
          <i className='material-icons'>person_add</i>
        </a>
      </li>
      <ul>
        <li>
          <a
            href='#add-log-modal'
            className='btn-floating btn-large orange darken-2 modal-trigger'
          >
            <i className='large material-icons'>add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
