import React, { Fragment } from 'react'
import useClipboard from "react-use-clipboard";

const copy = (clipboard, init, balance) => {
  var text = `Initial Balance : ${init}/-,\n`;
  clipboard.map(({ title, cost }) => (
    text += `Item: ${title} : ${cost}/-,\n`
  ))
  text += `Balance : ${balance}/- \n`
  return text
}

export function CopyToClip({ clipboard, init, balance }) {
  const [isCopied, setCopied] = useClipboard(copy(clipboard, init, balance), {
    // `isCopied` will go back to `false` after 3000ms.
    successDuration: 3000,
  });
  return (
    <Fragment>
      <p className='list-heading'>Copy Expense Sheet</p>
      <div className='res-btn'>
        <button className='btn' onClick={setCopied}>
          {isCopied ? "Copied to ClipBoard! 👍" : "Copy Text to Clipboard"}
        </button>
      </div>
    </Fragment>
  );
}