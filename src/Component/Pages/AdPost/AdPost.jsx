import React, { useState } from 'react'

const AdPost = () => {
    const [value,setValue]=useState('');
   const Check_Value = (e) => {
    const input = e.target.value;
    // Allow only digits
    if (/^\d*$/.test(input)) {
      setValue(input); // ✅ correct way to update state
    }
    // else: do nothing (invalid input)
  };

  return (
    <>
     <div className='flex flex-col gap-2 items-center'>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Title</legend>
  <input type="text" className="input" class="input input-md w-75 p-2" placeholder="Enter Product Title" />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Price</legend>
  <input type="text" value={value} onChange={Check_Value} className="input input-md w-75 p-2" placeholder="Enter Product Price" />
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Enter Product Discription</legend>
<textarea className="textarea" class="input input-md w-75 h-75" placeholder="Product Description"></textarea></fieldset>
     </div>
    </>
  )
}

export default AdPost