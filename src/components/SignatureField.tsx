import React from 'react';

const SignatureField: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">
        Assinatura (Obrigatório/Conforme Documento de Identificação)
      </h3>
      <div className="w-full h-32 border border-gray-300 rounded-md bg-gray-50">
        {/* Empty signature field for manual signing after printing */}
      </div>
      <p className="text-sm text-gray-500 italic">
        Este campo deve ser assinado manualmente após a impressão do documento.
      </p>
    </div>
  );
};

export default SignatureField;