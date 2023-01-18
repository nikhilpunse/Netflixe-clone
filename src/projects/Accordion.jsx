import React from 'react';
import { useState } from 'react';

const Accordion = ({curElem}) => {
  const [toggle,setToggle] = useState(false);

  return (
    <div className='relative z-10 overflow-hidden'> 
                <div onClick={()=>{setToggle(!toggle)}} className="flex justify-between items-center px-5 py-2 text-[28px] bg-slate-800 border border-black">
                    <h1 className="">{curElem.que}</h1>
                    <p  className="cursor-pointer text-4xl">{toggle?'-':'+'}</p>
                </div>
                {/* <!-- dropdown section --> */}
                <div className={`w-full ${toggle? 'open_desc px-5 ' : 'close_desc px-5' } sm:w-[80vw] text-[18px] sm:text-[24px] md:text-left bg-slate-800 border border-black `}>
                    {curElem.ans}
                </div>
    </div>
  )
}

export default Accordion;