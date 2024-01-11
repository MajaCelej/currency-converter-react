import "./style.css";


const Button = ({ calculateResult, resetForm }) => (
    <>
        <button className="button" onClick={calculateResult}>
            Przelicz
        </button>
    </>
);

export default Button;