import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import '../globals.css';

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'API Rick and Morty',
    description: 'Esse projeto consiste em um consumo de api, onde são mostrados mais de 800 personagens do universo de Rick And Morty.',
    link: 'https://github.com/Ruan-Init/catalogo-rick-and-morty',
    image: '/img/rick and morty.png',
  },
  {
    id: 2,
    name: 'Kainde Tecnologia',
    description: 'Esse projeto trata-se da criação do site institucional da empresa na qual eu atuo hoje.',
    link: 'https://github.com/Ruan-Init/kainde',
    image: '/img/kainde.png',
  },
  {
    id: 3,
    name: 'Banco Neon',
    description: 'Essa é apenas uma landing page demonstrativa onde eu foco apenas na UI da aplicação.',
    link: 'https://github.com/Ruan-Init/lp-neon',
    image: '/img/neon.png',
  },
  {
    id: 4,
    name: 'Look at Stars',
    description: 'Esse projeto é focado em rotas dentro da aplicação.',
    link: 'https://github.com/Ruan-Init/Projeto-pousada',
    image: '/img/pousada.png',
  },
  {
    id: 5,
    name: 'Manhattan Coffee House',
    description: 'Aplicação de landing page simples.',
    link: 'https://github.com/Ruan-Init/Projeto-cafetereia',
    image: '/img/cafeteria.png',
  },
  {
    id: 6,
    name: 'CloudBoost',
    description: 'Aplicação de landing page com animações usando Sass.',
    link: 'https://github.com/Ruan-Init/Cloudboost',
    image: '/img/cloudboost.png',
  },
];

const Projects: NextPage = () => {
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
                  <a className="text-lg text-blue-400 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/projects" legacyBehavior>
                  <a className="text-lg text-blue-400 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">Projetos</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-lg text-blue-400 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">Contato</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center flex-grow pt-28 p-4">
          <h1 className="text-4xl font-extrabold mb-8">Projetos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-600 bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                <div className="w-full h-40 mb-4 bg-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link href={project.link} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 underline font-semibold transition duration-300"
                  >
                    Ver projeto
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </main>

        <footer className="w-full bg-gray-900 py-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
            <p className="text-lg text-blue-400">Entre em contato:</p>
            <div className="flex justify-center space-x-8 flex-wrap">
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="mailto:seuemail@exemplo.com">ruan.espindola17@gmail.com</a>
              </p>
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="https://github.com/Ruan-Init" target="_blank" rel="noopener noreferrer">https://github.com/Ruan-Init</a>
              </p>
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/ruan-carlos-espindola-da-silva-626b86183/" target="_blank" rel="noopener noreferrer">linkedin.com/in/Ruan-Carlos</a>
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Ruan Carlos. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Projects;
