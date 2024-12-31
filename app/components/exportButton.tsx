// components/ExportButton.tsx
"useClient"
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


type ExportButtonProps = {
  targetId: string;
};

const ExportButton: React.FC<ExportButtonProps> = ({ targetId }) => {
  const handleExport = () => {
    const input = document.getElementById(targetId);
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Calculate the dimensions of the PDF
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

        // Create a new PDF instance
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Save the PDF
        pdf.save('resume.pdf');
      });
    }
  };

  return (
    <button onClick={handleExport} className="bg-green-500 text-white p-2 rounded-md">
      Export as PDF
    </button>
  );
};

export default ExportButton;