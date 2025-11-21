import React, {useId} from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 shadow-[0_8px_30px_rgba(0,0,0,0.19)] border border-gray-300 rounded-lg px-3 py-2 mr-3">
                <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="rounded-lg p-2 bg-gray-100 cursor-pointer outline-none w-full"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={onAmountChange && ((e)=> onAmountChange(Number(e.target.value)))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap shadow-[0_8px_30px_rgba(0,0,0,0.19)] border border-gray-300 rounded-lg px-3 py-2">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg p-2 bg-gray-100 cursor-pointer outline-none w-full"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                      {currencyOptions.map((currency)=>
                        <option 
                         value={currency}
                         key={currency}>
                            {currency}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default Input;