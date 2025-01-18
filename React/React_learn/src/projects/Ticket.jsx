import React, { useEffect, useState } from 'react'

const vip = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

const generl = [
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30],
    [31,32,33,34,35,36],
];

const economi = [
    [1,2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15,16],
    [17,18,19,20,21,22,23,24],
    [25,26,27,28,29,30,31,32],
    [33,34,35,36,37,38,39,40],
    [41,42,43,44,45,46,47,48],
    [49,50,51,52,53,54,55,56],
    [57,58,59,60,61,62,63,64]
]


function Ticket() {
    const [booked,Setbooked] = useState([]);
    
    useEffect(()=>{
        console.log(booked)
    },[booked])
  return (
    <>
    <div className='grid grid-cols-5 gap-2'>
        {vip.map ( (row,ri)=> {
            return row.map( (clo,ci) => {
                return <button key={`${ri}-${ci}`} className='w-10 h-10 ' onClick={
                    () => {
                        Setbooked([...booked,`V-${ri} ${ci}`])
                    }
                }>{clo}</button>
            })
        })}
    </div>
    <hr />
    <div className='grid grid-cols-6 gap-2'>
        {generl.map ( (row,ri)=> {
            return row.map( (clo,ci) => {
                return <button key={`${ri}-${ci}`} className='w-10 h-10 ' onClick={
                    () => {
                        Setbooked([...booked,`G-${ri} ${ci}`])
                    }
                }>{clo}</button>
            })
        })}
    </div>
    <hr />
    <div className='grid grid-cols-8 gap-2'>
        {economi.map ( (row,ri)=> {
            return row.map( (clo,ci) => {
                return <button key={`${ri}-${ci}`} className='w-10 h-10 ' onClick={
                    () => {
                        Setbooked([...booked,`E-${ri} ${ci}`])
                    }
                }>{clo}</button>
            })
        })}
    </div>
        </>
  )
}

export default Ticket