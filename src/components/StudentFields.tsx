import React from 'react';

const StudentFields: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">
        A ser Preenchido pelo Aluno
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
            Data
          </label>
          <input
            type="date"
            id="data"
            name="data"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-1">
            Data de Nascimento
          </label>
          <input
            type="date"
            id="data_nascimento"
            name="data_nascimento"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="col-span-2">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome completo (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="col-span-2">
          <label htmlFor="morada" className="block text-sm font-medium text-gray-700 mb-1">
            Morada
          </label>
          <input
            type="text"
            id="morada"
            name="morada"
            placeholder="Ex: Alameda Conde de Oeiras, 95 (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="localidade" className="block text-sm font-medium text-gray-700 mb-1">
            Localidade
          </label>
          <input
            type="text"
            id="localidade"
            name="localidade"
            placeholder="Ex: Oeiras (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="cod_postal" className="block text-sm font-medium text-gray-700 mb-1">
            Código Postal
          </label>
          <input
            type="text"
            id="cod_postal"
            name="cod_postal"
            placeholder="Ex: 2780-135 (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="concelho" className="block text-sm font-medium text-gray-700 mb-1">
            Concelho
          </label>
          <input
            type="text"
            id="concelho"
            name="concelho"
            placeholder="Ex: Oeiras (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="concelho_naturalidade" className="block text-sm font-medium text-gray-700 mb-1">
            Concelho de Naturalidade
          </label>
          <input
            type="text"
            id="concelho_naturalidade"
            name="concelho_naturalidade"
            placeholder="Ex: Lisboa (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="distrito" className="block text-sm font-medium text-gray-700 mb-1">
            Distrito
          </label>
          <input
            type="text"
            id="distrito"
            name="distrito"
            placeholder="Ex: Lisboa (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Ex: 21 443 1107 (Opcional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="telemovel" className="block text-sm font-medium text-gray-700 mb-1">
            Telemóvel
          </label>
          <input
            type="tel"
            id="telemovel"
            name="telemovel"
            placeholder="Ex: +351 919 393 008 (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ex: info@ecav.pt (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="nif" className="block text-sm font-medium text-gray-700 mb-1">
            NIF
          </label>
          <input
            type="text"
            id="nif"
            name="nif"
            placeholder="Ex: 123 456 789 (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="contrato" className="block text-sm font-medium text-gray-700 mb-1">
            Contrato de Formação
          </label>
          <input
            type="text"
            id="contrato"
            name="contrato"
            placeholder="Contrato de formação (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="contacto_ecav" className="block text-sm font-medium text-gray-700 mb-1">
            Contacto da ECAV
          </label>
          <input
            type="text"
            id="contacto_ecav"
            name="contacto_ecav"
            placeholder="Contacto da ECAV (Obrigatório)"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categoria Pretendida (Obrigatório)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="categoria" value="B" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">B – Ligeiros (18 anos)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="categoria" value="C" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">C – Pesados de Mercadorias (21 anos)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="categoria" value="A" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">A – Motociclos (24 anos)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="categoria" value="A2" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">A2 – Motociclos (18 anos)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="categoria" value="A1" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">A1 – Motociclos (16 anos)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="categoria" value="AM" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">AM – Ciclomotores (14/15 anos)</span>
          </label>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Já tem Teoria (código)? (Obrigatório)</h3>
        <div className="flex space-x-6">
          <label className="flex items-center space-x-3">
            <input type="radio" name="teoria_codigo" value="sim" required className="h-5 w-5 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Sim</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="radio" name="teoria_codigo" value="nao" required className="h-5 w-5 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Não</span>
          </label>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Escolheu a Escola de Condução Armando Vitor devido a (Opcional):</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="conheceu[]" value="publicidade" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Publicidade</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="conheceu[]" value="recomendacao" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Recomendação</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="conheceu[]" value="localizacao" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Localização</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="conheceu[]" value="conhecimento" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Conhecimento</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="conheceu[]" value="internet" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Internet</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="conheceu[]" value="facebook" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500" />
            <span className="text-sm text-gray-700">Facebook</span>
          </label>
          <div className="col-span-2 mt-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Outra (indique)
            </label>
            <input
              type="text"
              name="outra_conheceu"
              placeholder="Indique outra opção"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFields;