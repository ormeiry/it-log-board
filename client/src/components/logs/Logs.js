import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logActions';

const Logs = () => {
  const { logs, loading, filtered } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogs());
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : filtered !== null ? (
        filtered.map((log) => <LogItem log={log} key={log._id} />)
      ) : (
        logs.map((log) => <LogItem log={log} key={log._id} />)
      )}
    </ul>
  );
};

export default Logs;
