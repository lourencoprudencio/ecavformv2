import React from 'react';

const SchoolFields: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">
        A ser Preenchido pela Escola
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label htmlFor="info_interna" className="block text-sm font-medium text-gray-700 mb-1">
            Informação Interna
          </label>
          <textarea
            id="info_interna"
            name="info_interna"
            rows={3}
            placeholder="Informação interna relevante Ex: Inscrição efetuada por VISITA / SMS (controlo) / Email (interno) (Opcional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="inscricao_efetuada_por" className="block text-sm font-medium text-gray-700 mb-1">
            Inscrição efetuada por
          </label>
          <input
            type="text"
            id="inscricao_efetuada_por"
            name="inscricao_efetuada_por"
            placeholder="Nome do responsável pela inscrição (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="inscricao" className="block text-sm font-medium text-gray-700 mb-1">
            Inscrição N.º
          </label>
          <input
            type="text"
            id="inscricao"
            name="inscricao"
            placeholder="Número da inscrição (Opcional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolFields;