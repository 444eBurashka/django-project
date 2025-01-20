import React from 'react';

export default function Table ({ data }) {
  if (!data || data.length === 0) {
    return <p>Нет данных для отображения</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};