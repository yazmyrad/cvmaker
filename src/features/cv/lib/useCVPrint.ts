import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export function useCVPrint() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "My-CV", 
    pageStyle: `
      @page {
        size: A4;
        margin: 15mm;
      }
    `,
  });

  return { contentRef, handlePrint };
}