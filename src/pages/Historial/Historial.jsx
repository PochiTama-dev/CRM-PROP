import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import './historial.css';

const Historial = () => {
  const [selectedPdf, setSelectedPdf] = useState('/pdfs/Reporte_Abril.pdf');
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const pdfFiles = [
    { name: 'Reporte_Abril.pdf', month: 'Agosto, 2024', path: '/pdfs/Reporte_Abril.pdf' },
    { name: 'Ficha.pdf', month: 'Septiembre, 2024', path: '/pdfs/ficha_medica.pdf' },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedPdf;
    link.download = selectedPdf.split('/').pop(); 
    link.click();
  };

  return (
    <div className="historial">
      <div className="header">
        <h2>Historial de reportes</h2>
        <p>Análisis destacando las tendencias emergentes y el comportamiento del mercado.</p>
        <p className="reminder"><strong>Recordatorio: </strong>Puedes ver y descargar los análisis de mercado de todo el año, excepto los últimos 3 meses</p>
      </div>
      <div className="download-button">
        <button onClick={handleDownload}>Descargar PDF</button>
      </div>
      <div className="main-content">
        <div className="sidebar">
          <h3>{pdfFiles[0].month}</h3>
          <ul>
            {pdfFiles.map((file, index) => (
              <li key={index} onClick={() => setSelectedPdf(file.path)}>
                <img src="pdf-icon.png" alt="PDF" />
                {file.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="pdf-viewer">
          <Document
            file={selectedPdf}
            onLoadSuccess={onDocumentLoadSuccess}
            options={{ annotationMode: 'interactive' }}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.5} />
            ))}
          </Document>
        </div>
      </div>
 
    </div>
  );
};

export default Historial;
