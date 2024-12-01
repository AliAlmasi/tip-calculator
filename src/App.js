import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [theirTip, setTheirTip] = useState(0);

  const handleReset = () => {
    setBill(0);
    setMyTip(0);
    setTheirTip(0);
  };

  return (
    <main className="app">
      <BillInput bill={bill} setBill={setBill} />
      <TipPercentage tip={myTip} setTip={setMyTip}>
        <label>How did you like the service?</label>
      </TipPercentage>
      <TipPercentage tip={theirTip} setTip={setTheirTip}>
        <label>How did your friend like the service?</label>
      </TipPercentage>
      {bill > 0 ? (
        <>
          <Output bill={bill} tip={(myTip + theirTip) / 2} />

          <Reset onClick={handleReset} />
        </>
      ) : (
        <p>Enter your bill and select the options above.</p>
      )}
    </main>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div className="piece">
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        min={0}
        onChange={(e) => {
          setBill(Number(e.target.value));
        }}
      />
    </div>
  );
}

function TipPercentage({ children, tip, setTip }) {
  return (
    <div className="piece">
      {children}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was nice (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + (bill * tip) / 100} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onClick }) {
  return (
    <button className="reset" onClick={onClick}>
      Reset
    </button>
  );
}
