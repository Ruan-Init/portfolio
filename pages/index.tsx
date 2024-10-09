import type { NextPage } from 'next';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../globals.css';

const technologies = [
  { name: 'JavaScript', img: '/img/javascript.png' },
  { name: 'TypeScript', img: '/img/typescript.png' },
  { name: 'React', img: '/img/react.png' },
  { name: 'Next.js', img: '/img/next.png' },
  { name: 'Tailwind CSS', img: '/img/tailwind.png' },
  { name: 'Docker', img: '/img/docker.png' },
  { name: 'Terraform', img: '/img/terraform.png' },
  { name: 'Node.js', img: '/img/node.png' },
  { name: 'DevOps', img: '/img/devops.png' },
];

const Home: NextPage = () => {
  const bgImage = '/img/binario.png';

  return (
    <>
      {/* Cabeçalho de título e meta tags */}
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Bem-vindo ao meu portfólio pessoal. Conheça mais sobre meus projetos e habilidades." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Background e estrutura */}
      <div
        className="min-h-screen flex flex-col bg-black text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Header fixo */}
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

        {/* Conteúdo principal */}
        <main className="flex flex-col items-center justify-center flex-grow pt-20">
          <h1 className="text-6xl font-extrabold mb-16 text-center tracking-wide animate-glow">
            Bem-vindo ao meu portfólio
          </h1>

          {/* Swiper com slides responsivos */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="w-full max-w-6xl"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center w-48 h-48 bg-gray-800 p-6 rounded-lg"
              >
                <img src={tech.img} alt={tech.name} className="h-16 mb-4" />
                <h2 className="text-xl font-bold text-blue-400">{tech.name}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>

        {/* Rodapé */}
        <footer className="w-full bg-gray-900 py-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
            <p className="text-lg text-blue-400">Entre em contato:</p>
            <div className="flex justify-center space-x-8">
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="mailto:ruan.espindola17@gmail.com">ruan.espindola17@gmail.com</a>
              </p>
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="https://github.com/Ruan-Init" target="_blank" rel="noopener noreferrer">
                  https://github.com/Ruan-Init
                </a>
              </p>
              <p className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/ruan-carlos-espindola-da-silva-626b86183/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/Ruan-Carlos
                </a>
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Ruan Carlos. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
