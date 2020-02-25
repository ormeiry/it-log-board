import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';
const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log._id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <div>
      <li className='collection-item'>
        <div>
          <a
            href='#edit-log-modal'
            className={`modal-trigger ${
              log.attention ? 'red-text' : 'blue-text'
            }`}
            onClick={() => setCurrent(log)}
          >
            {log.message}
          </a>
          <br />
          <span className='grey-text'>
            <span className='black-text'></span> last updated by{' '}
            <span className='black-text'>{log.tech}</span> on{' '}
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
          </span>
          <a className='secondary-content' href='#!' onClick={onDelete}>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
