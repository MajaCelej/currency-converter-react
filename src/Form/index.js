import "./style.css";

const Form = ({ calculateResult, amount, setAmount, setCurrency, currency }) => (
  <form className="form">
    <div>
        <label className="form__label">
            <span>Kwota:</span>
        </label>
        <input
            className="input__field"
            type="number"
            name="amount"
            step="0.1"
            min="0.10"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
       />
    </div>
    <div>
        <label className="labelText">
            <span>Waluta</span>
        </label>
        <select
            select="input__field"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
        >
          <option>Euro</option>
          <option>Frank Szwajcarski</option>
          <option>Korona Czeska</option>
        </select>
    </div>
    <button className="button" onClick={calculateResult}>
      Przelicz
    </button>
  </form>
);

export default Form;
