const TextInput = (props) => {

  const handleUserInput = (e) => {
    props.setNameInput(`${e.target.value}`);
  };

    return (
    <input type="text" value={props.nameInput} onChange={handleUserInput}/>
  );
};

export default TextInput;
