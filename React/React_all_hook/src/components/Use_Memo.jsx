import { useEffect, useMemo, useState } from 'react'

function Use_Memo() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 400
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },2000)
  }, [])
// console.log("hello")                                                  // hello psint 3 time on console
// const cryptoReturns = exchange1Data.returns + exchange2Data.returns;     //100 + 400 = 500  
//                                                                         But , problem is this line run 3 times 
//                                                                         1. exchange1Data call
//                                                                         2. exchange2Data call
//                                                                         3. setTimeout- setBankData call 2sec but this time data not change

  const cryptoReturns = useMemo( () => {
    console.log("hello")
    return exchange1Data.returns + exchange2Data.returns;
  } , [exchange1Data,exchange2Data])

  const incomeTax = (cryptoReturns + bankData.income) * 0.3               // (500 + 100)*0.3 = 180

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default Use_Memo