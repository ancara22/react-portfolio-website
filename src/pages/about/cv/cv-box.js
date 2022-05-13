
import React, { useState } from 'react';
import { Page} from 'react-pdf';
import { Document } from 'react-pdf/build/entry.webpack';




import "./cv-box.css";


const MyCv = ({classN}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (

    <div className={"my_cv " + classN}>
      <Document  
          file="/10.03.22 CV Dionis Barcari.pdf" 
          onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
   

             



export default MyCv;
