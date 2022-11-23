import React, { useState } from 'react'


const CalculatorApp = () => {

    
    const [number, setNumber] = useState('')

    
    const handleClick = (e) => {
        setNumber(number.concat(e.target.value))
    }

    
    const handleClear = () => {
        setNumber('')
    }

    
    const handleSlice = () => {
        setNumber(number.slice(0, -1))

    }

    const handleAnswer = () =>{
        try{
            setNumber(eval(number).toString())
        }catch(error){
            setNumber('Invalid')
        }
    }
  return (
    <>
           <section>
               <div className="bg-teal-500 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10">
                   <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>

                       <p>CALCULATOR APP</p>
                   </div>

                   {/* screen */}
                   <div className=' h-20 '>
                       <input
                       type='text'
                       placeholder='0'
                       value={number}
                       className=' w-full h-full border border-white text-white bg-teal-900 text-4xl text-right pr-5 '
                        />
                   </div>

                   {/* keypad */}
                   <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
                       <button onClick={handleClear} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                       <button onClick={handleSlice} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
                       <button value='/' onClick={handleClick} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
                       <button value='+' onClick={handleClick} className='text-gray  bg-white w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button>


                       <button value='9' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button> 
                       <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
                       <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>

                       <button value='4' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
                       <button value='5' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
                       <button value='6' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
                       <button value='-' onClick={handleClick} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>

                       <button value='1' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
                       <button value='2' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
                       <button value='3' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
                       <button value='*' onClick={handleClick} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

                       <button value='.' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
                       <button value='0' onClick={handleClick} className='text-white w-20 h-20 bg-emerald-900 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
                       <button onClick={handleAnswer} className='text-gray bg-white w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>
        
                   </div>
                   
               </div>
           </section>
    </>
  )
}

export default CalculatorApp