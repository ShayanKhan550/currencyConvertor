import './App.css'
import { Input } from './components'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import { useState } from 'react'
function App() {
  const [Amount, setAmount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("pkr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)


  const swap = () => {
    setfrom(to)
    setto(from)
    setconvertedAmount(Amount)
    setAmount(convertedAmount)
  }
  // user enter 10 then 1$ = 280  10 * 280 = ans  
  const convert = () => {
    setconvertedAmount(Amount * currencyInfo[to])
  }
  const backgroundImage = "https://t4.ftcdn.net/jpg/04/48/46/75/360_F_448467517_QXFZY8nA41dSbvaJzCIfItRzk0Wmv5n6.jpg"
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full">
        <div className="w-full max-w-xl mx-auto rounded-lg p-5 shadow-xl shadow-black/15
">
           <h3 className='mb-3 text-3xl font-semibold'>Currency Convertor</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1 ">
              <Input
                className='bg-orange-400'
                label="From"
                amount={Amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setfrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className=" w-full text-center ">
              <button
                type="button"
                className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-md m-2 cursor-pointer"
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className="w-full mt-1 mb-4 ">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors text-lg font-medium">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
