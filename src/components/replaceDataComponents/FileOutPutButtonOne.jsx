import { IndexKeyMineCraftNPC } from "./IndexKeyMinecraftNPC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FileOutPutButtonOne = (props) => {
  if (
    props.contentOutputTargetRef === undefined ||
    props.contentOutputTargetRef.length === 0
  );

  const FileTest = () => {
    props.stepOneRef.current.classList.add("yellow");
    props.stepOneRef.current.classList.remove("green", "red");

    let str = props.contentOutputTargetRef.current.value;
    Object.keys(IndexKeyMineCraftNPC).forEach((key) => {
      str = str.replaceAll(key, IndexKeyMineCraftNPC[key]);
    });
    props.stepOneRef.current.classList.add("green");
    props.stepOneRef.current.classList.remove("red", "yellow");
    props.contentFileOutputConversionRef.current.value = str;
    props.contentOutput(str);
    props.downloadFileNumber();
  };

  return (
    <div ref={props.stepOneRef} className="buttonOne yellow" onClick={FileTest}>
      <FontAwesomeIcon className="fontAweIcon" icon="fa-exchange" />
      <button>Bedrock ID Conversion:</button>
    </div>
  );
};
export default FileOutPutButtonOne;
