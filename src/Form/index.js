import { StyledForm, Label, Input, Select, Button } from "./styled";

const Form = ({ calculateResult, amount, setAmount, setCurrency, currency, onFormSubmit }) => (
  <StyledForm onSubmit={onFormSubmit}>
    <div>
        <Label>
            <span>Kwota:</span>
        </Label>
        <Input
            type="number"
            name="amount"
            step="0.1"
            min="0.10"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
       />
    </div>
    <div>
        <Label>
            <span>Waluta:</span>
        </Label>
        <Select
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
        >
          <option>Euro</option>
          <option>Frank Szwajcarski</option>
          <option>Korona Czeska</option>
        </Select>
    </div>
    <Button onClick={calculateResult}>
      Przelicz
    </Button>
  </StyledForm>
);

export default Form;
