const TextInput = (props) => {
    return (
    <input onClick={props.TextInputFunction}>{props.TextInputValue}</input>
  );
};

export default TextInput;
