import { useRef } from "react";
import useState from "react-usestateref";
import FileDataInputtedOutputDataFunction from "../fileDataFunctions/FileDataInputtedOutputDataFunction";

import TextAreaInput from "../inputs/TextAreaInput";
import FileOutPutButtonOne from "./FileOutPutButtonOne";
import FileOutPutButtonTwo from "./FileOutPutButtonTwo";
import FileOutPutButtonNPC from "../NPCcomponents/FileOutPutButtonNPC";
import NPCInput from "../inputs/NumberInput";

const MainContent = () => {
  const inputFileRef = useRef(null);
  const contentOutputTargetRef = useRef(null);
  const stepOneRef = useRef(null);
  const stepTwoRef = useRef(null);
  const contentFileOutputConversionRef = useRef(null);
  const [, setContentOutputTargetHoldData, contentOutputTargetHoldDataRef] =
    useState(null);
  const [filename, setFileName] = useState(null);
  const [valueInput, setValueInput] = useState(350);
  const downloadFileNew = useRef(null);

  function downloadFile() {
    const blob = new Blob([contentFileOutputConversionRef.current.value], {
      type: "plain/text",
    });
    const fileUrl = URL.createObjectURL(blob);
    downloadFileNew.current.setAttribute("href", fileUrl);
    downloadFileNew.current.setAttribute(
      "download",
      filename.split("\\").pop().replace(".txt", " Optimized Build.txt")
    );
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
          setContentOutputTargetHoldData={setContentOutputTargetHoldData}
          contentFileOutputConversionRef={contentFileOutputConversionRef}
        />
        <FileOutPutButtonTwo
          stepOneRef={stepTwoRef}
          contentOutputTargetRef={contentOutputTargetRef}
          setContentOutputTargetHoldData={contentOutputTargetHoldDataRef}
          contentFileOutputConversionRef={contentFileOutputConversionRef}
        />
        <NPCInput valueInput={valueInput} setValueInput={setValueInput} />
        <FileOutPutButtonNPC
          contentOutputTargetRef={contentFileOutputConversionRef}
          contentOutputTargetHoldData={contentOutputTargetHoldDataRef}
          FileName={filename}
          downloadFile={downloadFile}
          valueInput={valueInput}
        />
      </div>
      <div className="wrapper-Main">
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
        <a className="downloadButton" href="Wait" ref={downloadFileNew}>
          Download Completed File
        </a>
      </div>
    </main>
  );
};
export default MainContent;
