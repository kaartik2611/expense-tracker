import React, { Fragment, useState } from 'react'

export const ExpenseForm = ({ items, setItems, init, setInit  }) => {
  const [warning, setWarning] = useState("");
  const [item, setItem] = useState('')
  const [cost, setCost] = useState('')

  const changeInit = e => {
    setInit(e.target.value);
  }
  const addItem = (e) => {
    setItem(e.target.value);
  };
  const addCost = e => {
    setCost(parseInt(e.target.value));
  }
  const setInitBal = e => {
    e.preventDefault()
  }
  const newItem = (e) => {
    e.preventDefault();
    if (typeof (cost) === 'string') {
      setWarning("Enter Cost of the Item")
      setItem("");
      setCost("");
      setTimeout(setWarning, 1500);
      return;
    }

    if (item.length === 0) {
      setWarning("Cannot add an empty Item 😅");
      setItem("");
      setCost("");
      setTimeout(setWarning, 3000);
      return;
    } else
      setItems([
        ...items,
        { id: Date.now(), title: item, cost: cost },
      ])
    setItem("");
    setCost('');
    setWarning("");
  };
  return (
    <Fragment>
      <div className='center-form'>
        <form>
          <div className='res-inp'>
          <label className='text-white balance-text'>Set Balance : </label>
          <input className='input ' type="number" placeholder='Add Inital Balance' value={init} onChange={changeInit} />
          </div>
          <div className='res-btn'>
          <button className='btn' onClick={setInitBal}>Set</button>
          </div>
        </form>
      </div>
      <p className='text-white warning'>{warning}</p>

      <div className='center-form'>
        <form>
          <div className='res-inp'>
          <input className='input' type="text" placeholder="Add Item" value={item} onChange={addItem} />
          <input className='input' type="number" placeholder='Add Cost' value={cost} onChange={addCost} />
          </div>
          <div className='res-btn'>
          <button className='btn' onClick={newItem}>Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}
