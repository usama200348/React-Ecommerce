import React, { useState } from 'react'

const AdPost = () => {
    const [value,setValue]=useState('');
   const Check_Value = (e) => {
    const input = e.target.value;
    // Allow only digits
    if (/^\d*$/.test(input)) {
      setValue(input); 
    }
  };
  const Post_Ad = (e)=>{
    const _value = e.target.value;
    console.log('Hello World');

  }

  return (
    <>
    <div>
     <div className='flex flex-col gap-2 items-center'>
      {/*Meta Field For Title  */} 
        <fieldset className="fieldset">
  <legend className="fieldset-legend text-[20px]">Title</legend>
  <input type="text" className="input" class="input input-md w-75 p-2" placeholder="Enter Product Title" />
</fieldset>
{/*Meta Field For Price */}
<fieldset className="fieldset">
  <legend className="fieldset-legend text-[20px]">Price</legend>
  <input type="text" value={value} onChange={Check_Value} className="input input-md w-75 p-2" placeholder="Enter Product Price" />
</fieldset>
{/*Meta Field For Ad Description*/}
<fieldset className="fieldset">
  <legend className="fieldset-legend text-[20px]">Enter Product Discription</legend>
<textarea id='add_detail' className="textarea" class="input input-md w-75 h-75 overflow-y-auto " placeholder="Product Description"></textarea></fieldset>
<button onClick={Post_Ad} id='post_ad' className="btn btn-outline btn-warning">Post Ad</button>
     </div>
     </div>
    </>
  )
}

export default AdPost