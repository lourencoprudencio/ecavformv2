import React from 'react';

const FormHeader: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <img 
          src="https://i.imgur.com/X1n5T13.png" 
          alt="ECAV Logo" 
          className="h-16 object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Ficha de Inscrição de Aluno
      </h1>
      <p className="text-gray-600">
        Preencha os campos abaixo para realizar a sua inscrição.
      </p>
    </div>
  );
};

export default FormHeader;