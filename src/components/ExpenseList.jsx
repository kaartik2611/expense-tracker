import React, { Fragment } from "react";
export const ExpenseList = ({ items, setClipboard }) => {
  setClipboard(items)
  return (
    <Fragment>
      <p className='list-heading'>Expense List</p>
      <div className='list'>
        <div className='item-align'>
          <p className='text-white'>Sr. No</p>
          <p className='text-white'>Item</p>
          <p className='text-white'>Cost</p>
        </div>
        {items.map((item, i) => (
          <div key={i} className='item-align'>
            <p className='text-white serial'>{i + 1}</p>
            <p className='text-white title'>{item.title}</p>
            <p className='text-white serial'>{item.cost}</p>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
