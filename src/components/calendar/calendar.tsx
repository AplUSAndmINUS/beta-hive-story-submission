import React, { useState } from 'react';
import moment from 'moment';

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const startOfMonth = currentDate.clone().startOf('month');
  const endOfMonth = currentDate.clone().endOf('month');
  const startOfWeek = startOfMonth.clone().startOf('week');
  const endOfWeek = endOfMonth.clone().endOf('week');

  const generateCalendar = () => {
    const calendar = [];
    let day = startOfWeek.clone();

    while (day.isBefore(endOfWeek, 'day')) {
      calendar.push(
        <tr key={day.format('YYYY-MM-DD')}>
          {[...Array(7)].map((_, i) => {
            const currentDay = day.clone();
            day.add(1, 'day');
            const isCurrentMonth = currentDay.isSame(currentDate, 'month');
            return (
              <td
                key={i}
                className={`${isCurrentMonth ? '' : 'bg-light'} ${
                  currentDay.date() === 21 ? 'bg-primary' : ''
                }`}
                style={isCurrentMonth ? {} : { opacity: 0.25 }}
              >
                {currentDay.date() === 21 ? (
                  <strong className='text-white'>21</strong>
                ) : (
                  currentDay.date()
                )}
                {currentDay.date() === 21 && (
                  <p>
                    <strong className='text-white'>The big day!</strong>
                  </p>
                )}
              </td>
            );
          })}
        </tr>
      );
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  return (
    <div className='container'>
      <div className='row mb-3 align-items-center justify-content-center d-flex'>
        <div className='col-md-1'>
          <button className='btn btn-primary' onClick={handlePrevMonth}>
            &lt;Prev
          </button>
        </div>
        <div className='col-md-3 text-center'>
          <h2 className='bd-title'>{currentDate.format('MMMM YYYY')}</h2>
        </div>
        <div className='col-md-1'>
          <button className='btn btn-primary' onClick={handleNextMonth}>
            Next&gt;
          </button>
        </div>
      </div>
      <div className='row'>
        <table className='table table-bordered table-fixed mb-4'>
          <thead className='thead-dark'>
            <tr>
              <th className='bg-light text-dark'>Su</th>
              <th className='bg-light text-dark'>Mo</th>
              <th className='bg-light text-dark'>Tu</th>
              <th className='bg-light text-dark'>We</th>
              <th className='bg-light text-dark'>Th</th>
              <th className='bg-light text-dark'>Fr</th>
              <th className='bg-light text-dark'>Sa</th>
            </tr>
          </thead>
          <tbody>{generateCalendar()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
