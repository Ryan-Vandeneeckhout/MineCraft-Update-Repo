import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FileDataInputtedOutputDataFunction = (props) => {
  const inputFileRef = useRef(null);
  const inputButton = useRef(null);
  const [inputSuccess, setInputSuccess] = useState(false); 

  function getFile() {
    if (inputFileRef.current === null);
    else {
      if (
        "files" in inputFileRef.current &&
        inputFileRef.current.files.length > 0
      ) {
        placeFileContent(
          props.TextAreaInputRef.current, 
          inputFileRef.current.files[0]
        );
        setInputSuccess(true);
        props.setFileName(inputFileRef.current.value.split("\\").pop());
        inputButton.current.classList.add("yellow");
        inputButton.current.classList.remove("red", "green");
      }
     
    }
  }

  function placeFileContent(target, file) {
    readFileContent(file)
      .then((content) => {
        target.value = content;
        inputButton.current.classList.add("green");
        inputButton.current.classList.remove("red", "yellow");
      })
      .catch((error) => {
        inputButton.current.classList.add("red");
        inputButton.current.classList.remove("green", "yellow");
        console.log(error);
      });
  }

  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }
  return (
    <>
    <div className="fileInputContainer yellow">
      <label className="uploadFileLabel white" htmlFor="files" ref={inputButton}><FontAwesomeIcon className="fontAweIconUpload" icon="fa-upload" /> Upload File </label>
      <input className="uploadFileHidden" type="file" id="files" onChange={getFile} ref={inputFileRef} />
      
      </div>

      {inputSuccess ? 
        <p className="fileInputPara">File Selected - {inputFileRef.current.value.split("\\").pop()}</p> : <p className="fileInputPara">No File Selected</p>}
    </>
  );
};
export default FileDataInputtedOutputDataFunction;
