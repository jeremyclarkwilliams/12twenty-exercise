import React from 'react';

function getTimeString(start, end) {
  const startDate = start.toLocaleDateString(),
        startTime = start.toLocaleTimeString().replace(/:\d{2}\s/, ' '), // removes seconds from string
        endDate = end.toLocaleDateString(),
        endTime = end.toLocaleTimeString().replace(/:\d{2}\s/, ' '); // removes seconds from string
  if (start.getTime() === end.getTime()) {
    return `${startDate} ${startTime}`;
  } else if (startDate === endDate) {
    return `${startDate}, ${startTime} – ${endTime}`;
  } else {
    return `${startDate}, ${startTime} – ${endDate}, ${endTime}`;
  }
}

function ResultRow(prop) {
  const data = prop.data,
        name = data.details.name,
        company = data.details.company,
        type = data.details.type,
        location = data.details.location,
        timeStart = new Date(data.date.start),
        timeEnd = new Date(data.date.end),
        status = data.status,
        registrants = data.registrants;
  return (
    <tr className="result" tabIndex="0">
      <td><input type="checkbox" name="result-select" /></td>
      <td>
        <h3 className="result-name">{name}</h3>
        {company.length > 0 &&
          <h4 className="result-company">{company}</h4>
        }
        {(type.length > 0 || location.length > 0) &&
          <p className="result-type-location">
            {type.length > 0 &&
              <span className="result-type">{type}</span>
            }
            {type.length > 0 && location.length > 0 &&
              <span> | </span>
            }
            {location.length > 0 &&
              <span className="result-location">{location}</span>
            }
          </p>
        }
      </td>
      <td>{getTimeString(timeStart, timeEnd)}</td>
      <td><span className={`result-status ${status}`}>{status}</span></td>
      <td>{registrants}</td>
    </tr>
  );
}

export default ResultRow;
