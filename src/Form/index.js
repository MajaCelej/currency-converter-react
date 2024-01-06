import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__area">
            <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w EUR
                        </span>
                        <input className="form__field" type="number" name="amount" step="0.01" min="0.10"/>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Aktualny kurs
                        </span>
                        <input className="form__field" name="current rate" value="4.47" readOnly/>
                    </label>

                </p>
        </fieldset>
    </form>
);

export default Form;