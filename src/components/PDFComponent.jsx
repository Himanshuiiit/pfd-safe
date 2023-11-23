"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const PDFComponent = ({ password }) => {
  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "s" || e.key === "S" || e.key === "I")
      ) {
        e.preventDefault();
      }
    });
  }, []);

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const scrollRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div
      className="mx-auto bg-black bg-opacity-30 p-16 h-screen w-fit overflow-x-hidden overflow-y-scroll"
      onScroll={() => {
        setPageNumber(
          Math.ceil(
            (scrollRef.current.scrollTop + 16 * numPages) /
              (scrollRef.current.clientHeight - 60)
          )
        );
      }}
      ref={scrollRef}
    >
      <p className="fixed top-10 left-[47%] z-10 bg-black bg-opacity-50 text-white px-3 py-2">
        Page {pageNumber} of {numPages}
      </p>
      <Document
        file={"/assets/react_protected.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
        onPassword={(callback) => callback(password)}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <div style={{ margin: "20px" }} key={page}>
                <Page
                  pageNumber={page}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  scale={1.1}
                />
              </div>
            );
          })}
      </Document>
    </div>
  );
};

export default PDFComponent;
