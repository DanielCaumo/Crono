import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Bem-vindo!</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Cadastrar com o Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Ou cadastre-se com seu email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Nome completo <span className="text-red-600">*</span></label>
                      <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="Nome e sobrenome" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="nascimento">Data de nascimento<span className="text-red-600">*</span></label>
                      <input id="nascimento" type="date" className="form-input w-full text-gray-300" placeholder="00/00/0000" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="insira email para cadastro" required />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Senha <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Senha (pelo menos 8 caracters)" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="passwordver">Confirmar senha <span className="text-red-600">*</span></label>
                      <input id="passwordver" type="password" className="form-input w-full text-gray-300" placeholder="Senha (pelo menos 8 caracters)" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="cpf">CPF <span className="text-red-600">*</span></label>
                      <input id="cpf" type="text" className="form-input w-full text-gray-300" placeholder="000.000.000-00" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="fone">Telefone <span className="text-red-600">*</span></label>
                      <input id="fone" type="tel" className="form-input w-full text-gray-300" placeholder="(DDD) + número" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="cep">CEP <span className="text-red-600">*</span></label>
                      <input id="cep" type="text" className="form-input w-full text-gray-300" placeholder="00.000-000" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="logradouro">Logradouro <span className="text-red-600">*</span></label>
                      <input id="logradouro" type="text" className="form-input w-full text-gray-300" placeholder="00.000-000" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="ennumero">Número <span className="text-red-600">*</span></label>
                      <input id="ennumero" type="text" className="form-input w-full text-gray-300" placeholder="Número da residência" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="encomplemento">Complemento <span className="text-red-600">*</span></label>
                      <input id="encomplemento" type="text" className="form-input w-full text-gray-300" placeholder="Complemento" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="bairro">Bairro <span className="text-red-600">*</span></label>
                      <input id="bairro" type="text" className="form-input w-full text-gray-300" placeholder="Bairro" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="cidade">Cidade <span className="text-red-600">*</span></label>
                      <input id="cidade" type="text" className="form-input w-full text-gray-300" placeholder="Cidade" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="estado">Estado <span className="text-red-600">*</span></label>
                      <input id="estado" type="text" className="form-input w-full text-gray-300" placeholder="Estado" required />
                    </div>
                  </div>


                  <div className="text-sm text-gray-500 text-center">
                    Eu concordo em ser contactado pela equipe do CRONO sobre condições de pagamento do contrato. <Link to="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Política de Privacidade</Link>.
                                </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Cadastrar</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Já possui uma conta no CRONO? <Link to="signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Entrar</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default SignUp;