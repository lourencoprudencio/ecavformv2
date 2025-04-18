import React, { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import FormHeader from './FormHeader';
import StudentFields from './StudentFields';
import SchoolFields from './SchoolFields';
import SignatureField from './SignatureField';

const RegistrationForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const generatePDF = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsGeneratingPDF(true);
    
    try {
      const form = formRef.current;
      const submitButton = form.querySelector('button[type="submit"]');
      
      if (submitButton) {
        submitButton.style.display = 'none';
      }
      
      const canvas = await html2canvas(form, {
        scale: 3, // Increased scale for better quality
        useCORS: true,
        logging: false,
        windowWidth: form.offsetWidth,
        width: form.offsetWidth,
        height: form.offsetHeight
      });
      
      if (submitButton) {
        submitButton.style.display = '';
      }
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Adjust the ratio to fill more of the page
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight) * 0.95;
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
      
      // Calculate margins to center the content
      const marginX = (pdfWidth - scaledWidth) / 2;
      const marginY = (pdfHeight - scaledHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', marginX, marginY, scaledWidth, scaledHeight, '', 'FAST');
      pdf.save('ECAV_Ficha_Inscricao.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div ref={formRef} className="p-8">
        <FormHeader />
        
        <form onSubmit={generatePDF} className="space-y-8">
          <StudentFields />
          <SignatureField />
          <SchoolFields />
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Avisos</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong>Envio de documentos:</strong> secretaria@ecav.pt</li>
              <li><strong>Alteração de dados:</strong> É responsabilidade do aluno informar sempre que existirem alterações aos seus dados pessoais</li>
              <li><strong>Para menores de 18 anos:</strong> É necessário apresentar Declaração Paternal, cartão de cidadão dos pais e original da Narrativa Completa ou certidão narrativa ou código de acesso online da certidão de nascimento do candidato.</li>
              <li><strong>Mais Informaçoes em:</strong> ecav.pt</li>
            </ul>
          </div>
          
          <div className="text-xs text-gray-600 mt-4 pt-4 border-t border-gray-200">
            <p>Os dados recolhidos destinam-se a ser processados automaticamente com o objectivo desta empresa ou empresa(s) do grupo lhe poderem dar informações sobre a(s) empresa(s), produto(s) ou serviço(s) que comercializa(m). Tem o direito de aceder aos seus dados e solicitar a sua verificação e/ou eliminação.</p>
            <p className="mt-2">Com o fim exclusivo de providenciar informação às autoridades e/ou entidades oficiais, desde já, declaro que concedo expressa autorização à ECAV - ESCOLA DE CONDUÇÃO ARMANDO VITOR para que capte e disponibilize as imagens do sistema interno de vídeo vigilância.</p>
            <p className="mt-2">ECAVMOSC01 - FICHA DE INSCRIÇÃO ALUNO V19.doc MAR'24</p>
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={isGeneratingPDF}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <Download size={20} />
              {isGeneratingPDF ? 'A gerar PDF...' : 'Transferir PDF'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;