
import React, { useEffect, useState } from "react";
import "../src/App.css";

function App() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    const numericAmount = Number(amount);

    if (Number.isNaN(numericAmount)) {
      setResult(null);
      return;
    }

    if (fromCurrency === toCurrency) {
      setResult(numericAmount);
      return;
    }

    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rate");
      }

      const data = await response.json();
      const rate = data?.rates?.[toCurrency];

      if (rate === undefined) {
        throw new Error("Unsupported currency selection");
      }

      const convertedAmount = numericAmount * rate;
      setResult(convertedAmount);
    } catch (error) {
      console.error("Error converting currency:", error);
      setResult(null);
    }
  };
  return (
    <>
      <div className="currency_converter">

        <h1>Currency Converter</h1>

        {/* Amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        {/* From Currency */}
        <label>From: </label>

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <br />
        <br />

        {/* To Currency */}
        <label>To: </label>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <br />
        <br />

        {/* Convert Button */}
        <button onClick={convertCurrency}>
          Convert
        </button>

        {/* Result */}
        {result !== null && (
          <h2>
            {amount} {fromCurrency} ={" "}
            {result.toFixed(2)} {toCurrency}
          </h2>
        )}

      </div>
    </>
  );
}

export default App;

