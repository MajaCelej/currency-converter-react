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
                        <input className="form__field" name="current rate" value="4.47" readonly/>
                    </label>

                </p>
        </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <section className="form__textField">
                <p>
                    Kwota w PLN .usunąć klase?.: <strong className="js-result"></strong>
                </p>
        </section>
    </form>
);

export default Form;