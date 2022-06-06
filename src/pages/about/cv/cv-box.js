
import React, {useState} from 'react';
import "./cv-box.css";
import { Document, Page, pdfjs } from "react-pdf";
import Footer from "../../../footer";
import mycv from "/public/mycv.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyCv = ({classN}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  
  return (

    <div className={"my_cv " + classN} >
      <Document className="cv-file" file={mycv} onLoadSuccess={onDocumentLoadSuccess} renderMode="svg">
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>

      <div className='buttons-box'>

        <button 
          onClick={()=>{
            if(!(pageNumber-1 < 1)) setPageNumber(pageNumber-1)
        }}>Back</button>

         <button onClick={()=>{
            if(!(pageNumber+1 > numPages)) setPageNumber(pageNumber+1)
        }}>Next</button>
      </div>
      
    </div>
  );
}
   

             



export default MyCv;
