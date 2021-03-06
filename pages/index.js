/*
** Author: Fuad
** github.com/FuadHy
*/

// Libraries and frameworks used in this project
/* Next.js React.js Tailwindcss tailwindcss-multi-theme */

import styles from '../styles/Home.module.css'
// all the buttons are stored here
import btns from '../data/btns'
import { useState } from 'react'

export default function Home() {

  const [theme, setTheme] = useState(1)
  const [display, setDisplay] = useState(0)
  const [prevDisplay, setPrevDisplay] = useState(0)
  const [op, setOp] = useState(null)

  // buttons click handler except for '=', 'DEL' and 'reset'
  const clickHandler = btn => {
    if(btn.operator){
      setOp(btn.value)

    } else {
      if(op != null && prevDisplay == 0) {
        setPrevDisplay(display)
        setDisplay(btn.value)
      } else setDisplay(display == 0 ? btn.value : display + btn.value)
    }
  }

  // this func will be triggered when '=' clicked
  const calculate = () => {
    let _display = display, _prevDisplay = prevDisplay

    if(op != null && prevDisplay == 0) {
      _display = display
      _prevDisplay = display
    }

    if(op == null && prevDisplay == 0) return
    switch(op){
      case '+':
        setDisplay(parseFloat(_prevDisplay) + parseFloat(_display))
        break
      case '-':
        setDisplay(parseFloat(_prevDisplay) - parseFloat(_display))
        break
      case 'x':
        setDisplay(parseFloat(_prevDisplay) * parseFloat(_display))
        break
      case '/':
        setDisplay(parseFloat(_prevDisplay) / parseFloat(_display))
        break
        
    }
    setPrevDisplay(0)

  }

  // delete func for deleting the last character (:
  const del = () => setDisplay(display.toString().length == 1 ? 0 : display.toString().slice(0, -1))

  // function to make calc brand new again (:-
  const reset = () => {
    setPrevDisplay(0)
    setDisplay(0)
    setOp(null)
  }

  return (
    <div className={`w-screen h-screen theme-t${theme}`}>
      <div className='flex items-center relative justify-center w-full h-full bg-[#3A4764] t2:bg-[#E6E6E6] t3:bg-[#160628]'>

        <div className='flex flex-col w-1/3 h-3/4 '>

          <div className='flex w-full justify-between items-center px-2 pt-2'>
            <h4 className='text-white t2:text-[#35352C] t3:text-[#FFE53D] font-bold text-xl'>
              calc
            </h4> 
            <div className='flex items-center justify-center'>
              <p className='text-white t2:text-[#35352C] t3:text-[#FFE53D] text-[9px] mr-3 font-bold font-sans uppercase'>theme</p>
              <div className='w-14 h-4 flex items-center justify-center rounded-[8px] bg-[#252E46] t2:bg-[#D1CCCC] t3:bg-[#1D0934]'>
                <div onClick={() => setTheme(1)} className={`h-4 w-4 rounded-[8px] ${theme == 1 && 'bg-[#ea5c4c]'} relative flex items-center justify-center after:content-['1'] after:absolute after:-top-4 after:text-white t2:after:text-[#35352C] t3:after:text-[#FFE53D] after:text-[8px] cursor-pointer`}></div>
                <div onClick={() => setTheme(2)} className={`h-4 w-4 rounded-[8px] ${theme == 2 && 'bg-[#CA5502]'} relative flex items-center justify-center after:content-['2'] after:absolute after:-top-4 after:text-white t2:after:text-[#35352C] t3:after:text-[#FFE53D] after:text-[8px] cursor-pointer`}></div>
                <div onClick={() => setTheme(3)} className={`h-4 w-4 rounded-[8px] ${theme == 3 && 'bg-[#00E0D1]'} relative flex items-center justify-center after:content-['3'] after:absolute after:-top-4 after:text-white t2:after:text-[#35352C] t3:after:text-[#FFE53D] after:text-[8px] cursor-pointer`}></div>
              </div>
            </div>
          </div>

          <div className='w-full h-1/5 flex items-center justify-end mt-4 pr-4 bg-[#182034] t2:bg-[#EDEDED] t3:bg-[#1D0934] rounded-md'>
            <h3 className='text-white t2:text-[#35352C] t3:text-[#FFE53D] font-bold text-4xl font-sans'>{display}</h3>
          </div>

          <div className='w-full flex-1 mt-4 p-4 bg-[#232C43] t2:bg-[#D1CCCC] t3:bg-[#1D0934] rounded-md'>
          <div className='h-5/6 w-full grid grid-cols-4 place-items-center'>
            {btns.map((btn, k) => (
              <div key={k} onClick={() => btn.value == 'DEL' ? del() : clickHandler(btn)} className={`w-4/5 h-4/5 border-b-4 cursor-pointer ${btn.value == 'DEL' ? 'bg-[#637097] t2:bg-[#377F86] t3:bg-[#BC15F4] border-[#404E72] t2:border-[#1B5F65] t3:border-[#58077D] hover:bg-[#a1adcf] t2:hover:bg-[#52acb4] t3:hover:bg-[#d455ff]' : 'bg-[#EAE3DC] border-[#B4A597] t2:bg-[#E5E4E1] t2:border-[#A69D91] t3:border-[#BC15F4] t3:bg-[#58077D] hover:bg-[#ffffff] t2:hover:bg-[#ffffff] t3:hover:bg-[#2f0643]'} mx-4 rounded-xl flex items-center justify-center`}>
                <h5 className={`${btn.value == 'DEL' ? 'text-white' : 'text-slate-700 t2:text-[#35352C] t3:text-[#FFE53D]'}  font-bold font-sans text-2xl`}>{btn.value}</h5>
              </div>
            ))}
          </div>
          <div className='w-full grid grid-cols-2 place-items-center mt-2'>
            <div onClick={reset} className='w-5/6 mr-2 flex items-center justify-center cursor-pointer bg-[#637097] t2:bg-[#377F86] t3:bg-[#BC15F4] t2:border-[#1B5F65] t3:border-[#58077D] hover:bg-[#a1adcf] t2:hover:bg-[#52acb4] t3:hover:bg-[#d455ff] border-b-4 border-[#404E72] rounded-md'>
              <p className='font-bold text-white font-sans py-2 text-1xl uppercase'>reset</p>
            </div>
            <div onClick={calculate} className='w-5/6 ml-2 flex items-center justify-center cursor-pointer bg-[#CF4030] t2:bg-[#CA5502] t3:bg-[#00E0D1] hover:bg-[#d07369] t2:hover:bg-[#ec7520] t3:hover:bg-[#76f9f0] border-b-4 border-[#93261A] t2:border-[#893901] t3:border-[#6CF9F2] rounded-md'>
              <p className='font-bold text-white font-sans py-2 text-1xl uppercase'>=</p>
            </div>
          </div>
          </div>
        

        </div>
        <a href='https://github.com/FuadHy/nextjs-tailwindcss-calc' target={'_blank'} rel="noreferrer" className='w-full text-center text-[#dfdfdf] t2:text-[#000000] no-underline absolute bottom-3 text-[9px]'>github.com/fuadhy</a>
      </div>
      
    </div>
  )
}
