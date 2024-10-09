import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import '../globals.css';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Bem-vindo ao meu portfólio pessoal. Conheça mais sobre meus projetos e habilidades." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    
      <div className="min-h-screen flex flex-col bg-black text-white">
        <header className="w-full bg-gray-900 py-4 fixed top-0 left-0 z-10">
          <nav className="max-w-4xl mx-auto flex justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-lg text-blue-400 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
                    Sobre
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects" legacyBehavior>
                  <a className="text-lg text-blue-400 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
                    Projetos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-lg text-blue-400 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
                    Contato
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center flex-grow pt-24 p-4 sm:p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center">
            Sobre Mim
          </h1>
          <div className="max-w-3xl text-lg text-gray-300 text-center leading-relaxed space-y-4">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Ao longo
              dos anos, tive a oportunidade de trabalhar com diversas tecnologias,
              incluindo desenvolvimento web, DevOps e soluções de automação. Minha
              jornada começou com curiosidade e agora se tornou uma carreira que
              amo, onde sempre estou em busca de novos desafios e aprendizado.
            </p>
            <p>
              Além do desenvolvimento, tenho uma forte afinidade com práticas de
              infraestrutura como código, utilizando ferramentas como Docker e
              Terraform para otimizar processos e garantir a escalabilidade e
              confiabilidade de sistemas. Acredito que a combinação entre
              desenvolvimento e DevOps é essencial para entregar soluções robustas e
              eficientes.
            </p>
            <p>
              Meu foco é sempre na qualidade e na melhoria contínua, seja aprimorando
              a responsividade de interfaces web, seja otimizando fluxos de CI/CD.
              Estou comprometido em contribuir para projetos que façam a diferença e
              ajudem a resolver problemas do mundo real, utilizando a tecnologia como
              uma ferramenta poderosa para a inovação.
            </p>
          </div>
          <nav className="mt-8">
            <Link href="/" legacyBehavior>
              <a className="inline-block text-white bg-blue-600 py-3 px-6 rounded-lg hover:bg-blue-700 shadow-lg transition duration-300">
                Voltar para o Início
              </a>
            </Link>
          </nav>
        </main>

        <footer className="w-full bg-gray-900 py-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
            <p className="text-lg text-blue-400">Entre em contato:</p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="mailto:ruan.espindola17@gmail.com">ruan.espindola17@gmail.com</a>
              </p>
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="https://github.com/Ruan-Init" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/ruan-carlos-espindola-da-silva-626b86183/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Ruan Carlos. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
