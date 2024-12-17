import React from "react";

const CustomTable = ({ data, columns, onButtonClick, buttonLabel }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
          {onButtonClick && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                {col.isImg ? (
                  <img
                    alt={row[col.accessor]}
                    src={row[col.accessor]}
                    style={{ width: "50px" }}
                  />
                ) : (
                  row[col.accessor] || "N/A"
                )}
              </td>
            ))}
            {onButtonClick && (
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onButtonClick(row)}
                >
                  {buttonLabel || "Click"}
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
