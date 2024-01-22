import "./style.css";

const Form = ({ calculateResult, amount, setAmount, setCurrency, currency, onFormSubmit }) => (
  <form className="form" onSubmit={onFormSubmit}>
    <div>
        <label className="form__label">
            <span>Kwota:</span>
        </label>
        <input
            className="form__inputField"
            type="number"
            name="amount"
            step="0.1"
            min="0.10"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
       />
    </div>
    <div>
        <label className="form__label">
            <span>Waluta:</span>
        </label>
        <select
            className="form__select"
            select="form__inputField"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
        >
          <option>Euro</option>
          <option>Frank Szwajcarski</option>
          <option>Korona Czeska</option>
        </select>
    </div>
    <button className="form__button" onClick={calculateResult}>
      Przelicz
    </button>
  </form>
);

export default Form;
