import React, { Fragment, useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseList } from './ExpenseList';
import { Balance } from './Balance';
import { CopyToClip } from './CopyToClip';
// const test =[{ id: Date.now() , title: 'banana'  , cost : 20} , { id: Date.now() *2  , title: 'carrot'  , cost : '35'}]
export const Expenses = () => {
	const [init, setInit] = useState(1000)
	const [balance, setBalance] = useState(0)
	const [items, setItems] = useState([]);
	const [clipboard, setClipboard] = useState([])
	return (
		<Fragment>
			<p className='text-white heading'>Expense Tracker</p>
			<Balance items={items} init={init} balance={balance} setBalance={setBalance} />
			<ExpenseForm items={items} setItems={setItems} init={init} setInit={setInit} />
			<ExpenseList items={items} setClipboard={setClipboard} />
			<CopyToClip clipboard={clipboard} init={init} balance={balance}></CopyToClip>
		</Fragment>
	)
}
