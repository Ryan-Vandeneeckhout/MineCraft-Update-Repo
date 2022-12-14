export default function NPCInput(props) {
  const handleUserInput = (e) => {
    props.setValueInput(`${e.target.value}`);
  };

  return (
    <div className="labelsNPC">
      <label htmlFor="NPC input">Commands per NPC:</label>
      <input
        required
        aria-label="NPC input"
        type="number"
        onChange={handleUserInput}
        placeholder={props.valueInput}
        value={props.valueInput}
        min={120}
        max={1000}
      />
    </div>
  );
}
