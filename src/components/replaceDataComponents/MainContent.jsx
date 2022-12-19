import { useRef } from "react";
import useState from "react-usestateref";
import FileDataInputtedOutputDataFunction from "../fileDataFunctions/FileDataInputtedOutputDataFunction";

import TextAreaInput from "../inputs/TextAreaInput";
import FileOutPutButtonOne from "./FileOutPutButtonOne";
import FileOutPutButtonNPC from "../NPCcomponents/FileOutPutButtonNPC";
import NPCInput from "../inputs/NumberInput";
import TextInput from "../inputs/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContent = () => {
  const inputFileRef = useRef(null);
  const contentOutputTargetRef = useRef(null);
  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const contentFileOutputConversionRef = useRef(null);
  const [, setContentOutputTargetHoldData, contentOutputTargetHoldDataRef] =
    useState(null);
  const [filename, setFileName] = useState("No File Specified");
  const [valueInput, setValueInput] = useState(400);
  const [nameInput, setNameInput] = useState("Kitty_Shizz");
  const downloadFileNew = useRef(null);
  const downloadFileNewNumbered = useRef(null);

  function downloadFile() {
    const blob = new Blob([contentFileOutputConversionRef.current.value], {
      type: "plain/text",
    });
    const fileUrl = URL.createObjectURL(blob);
    downloadFileNew.current.classList.add("Show");
    downloadFileNew.current.setAttribute("href", fileUrl);
    if (filename.includes(".txt")) {
      downloadFileNew.current.setAttribute(
        "download",
        filename.split("\\").pop().replace(".txt", " Optimized Build.txt")
      );
    }
    if (!filename.includes(".")) {
      downloadFileNew.current.setAttribute(
        "download",
        filename.split("\\").pop() + " Optimized Build.txt"
      );
    } else {
      downloadFileNew.current.setAttribute(
        "download",
        filename
          .split("\\")
          .pop()
          .replace(".mcfunction", " Optimized Build.mcfunction")
      );
    }
  }
  function downloadFileNumber() {
    const blob = new Blob([contentOutputTargetHoldDataRef.current], {
      type: "plain/text",
    });
    const fileUrl = URL.createObjectURL(blob);
    downloadFileNewNumbered.current.setAttribute("href", fileUrl);

    if (filename.includes(".txt")) {
      downloadFileNewNumbered.current.setAttribute(
        "download",
        filename
          .split("\\")
          .pop()
          .replace(".txt", " Optimized BedRock Build.txt")
      );
    }
    if (!filename.includes(".")) {
      downloadFileNewNumbered.current.setAttribute(
        "download",
        filename.split("\\").pop() + " Optimized BedRock Build.txt"
      );
    } else {
      downloadFileNewNumbered.current.setAttribute(
        "download",
        filename
          .split("\\")
          .pop()
          .replace(".mcfunction", " Optimized BedRock Build.mcfunction")
      );
    }
  }
  return (
    <main>
      <div className="sidemenu-Buttons">
        <FileDataInputtedOutputDataFunction
          TextAreaInputRef={contentOutputTargetRef}
          inputFileRef={inputFileRef}
          stepOneRef={stepOneRef}
          stepTwoRef={stepTwoRef}
          setFileName={setFileName}
        />
        <FileOutPutButtonOne
          stepOneRef={stepOneRef}
          contentOutputTargetRef={contentOutputTargetRef}
          contentFileOutputConversionRef={contentFileOutputConversionRef}
          contentOutput={setContentOutputTargetHoldData}
          downloadFileNumber={downloadFileNumber}
        />
        <TextInput
          nameInput={filename}
          setNameInput={setFileName}
          labelText={"Edit filename:"}
        />
        <div className="downloadButton yellow Show">
          <FontAwesomeIcon className="fontAweIcon" icon="fa-download" />
          <a href="#downloadBedrock" ref={downloadFileNewNumbered}>
            Download Converted Bedrock ID File:
          </a>
        </div>

        <NPCInput valueInput={valueInput} setValueInput={setValueInput} />
        <TextInput
          nameInput={nameInput}
          setNameInput={setNameInput}
          labelText={"Edit Creator Name:"}
        />
        <FileOutPutButtonNPC
          contentOutputTargetRef={contentFileOutputConversionRef}
          contentOutputTargetHoldDataRef={contentOutputTargetHoldDataRef}
          FileName={filename}
          downloadFile={downloadFile}
          valueInput={valueInput}
          nameInput={nameInput}
        />
        <a className="downloadButton" href="#downloadNPC" ref={downloadFileNew}>
          Download Completed NPC File
        </a>
      </div>
      <div className="wrapper-Main uploadFileHidden">
        <h3>File Input Preview</h3>
        <TextAreaInput
          TextInputValue="Preview your unmodified file here..."
          TextAreaInputRef={contentOutputTargetRef}
        />
        <h3>File Output Preview</h3>
        <TextAreaInput
          TextInputValue="Conversion preview..."
          TextAreaInputRef={contentFileOutputConversionRef}
        />
      </div>
    </main>
  );
};
export default MainContent;
