import React, { useRef, useState } from 'react'

const OtpVerify = () => {
  
  const [otp,setOtp] = useState(Array(6).fill(''));
  const inputRef = useRef([]);

  function handleOtp(element,index){

    let value = element.value;
    if (!/^\d*$/.test(value)) return;
    setOtp((prev)=>{
      let updated = [...prev];
      updated[index] = value[value.length-1];
      return updated;
    });
    if(inputRef.current[index+1] && value){
      inputRef.current[index+1].focus();
    }
  }

  function handleKey(e,index){

    const isCurrentEmpty = e.target.value === '';

    if(e.key==='Backspace'){
      setOtp((prev)=>{
      let updated = [...prev];
      updated[index] = '';
      return updated;
    });
      if(isCurrentEmpty && inputRef.current[index-1]){
        inputRef.current[index-1].focus();
        inputRef.current[index - 1].select();
      }
    } 
  }
 
  return (
    <div className='flex-1 md:mx-32 '>
        <div className="container h-[300px] flex items-center">
          <div  className="container flex justify-center items-center gap-2">
            {otp.map((element,index)=>(
              <input 
              type="text" 
              key={index}
              ref={(el)=>inputRef.current[index]=el}
              onChange={(e)=>handleOtp(e.target,index)}
              onKeyDown={(e)=>handleKey(e,index)}
              value={element}
              pattern="\d*"
              onFocus={(e)=>e.target.select()}
              className='border-1 w-14 h-14 rounded-2xl text-3xl text-center'
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default OtpVerify