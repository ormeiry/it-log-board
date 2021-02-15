import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { firstName, lastName, _id } }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteTech(_id));
    M.toast({ html: 'Technician deleted' });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
