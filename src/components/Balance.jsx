import React, { Fragment } from 'react'

export const Balance = ({ items, balance, setBalance, init }) => {
  var a=0
  items.forEach((item) => a += parseInt(item.cost))
  setBalance(init - a)
  return (
    <Fragment>
      <div className='balance-div'>
      <p className='text-white balance-text'>Total Balance : {init}</p>
      <p className='text-white balance-text'>Money Used : {init-balance}</p>
      {parseInt(balance) <= 0 ? <p className='text-white balance-text danger'>Balance Left :  { balance }</p> : <p className='text-white balance-text safe'>Balance Left :  { balance }</p>}
      </div>
  </Fragment>
  )
}
