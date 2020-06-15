import React from 'react';
import Button from './Button'

const Table = ({columns, data, tableDescriptor, onRemoveData}) => {
    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td
                          className='text-truncate'
                          key={item[columnTitle]+columnTitle}
                          style={{
                            maxWidth:"100px"
                          }}
                        >
                          {item[columnTitle]}
                        </td>
                    ))}
                    <td>
                    <Button
                      label="Delete"
                      classes="btn btn-danger"
                      onClick={() => onRemoveData(item)}
                    />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
