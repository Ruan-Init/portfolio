import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '../globals.css';

const Contact: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();
            setResponseMessage(data.message);
            if (res.ok) {
                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            setResponseMessage('Erro ao enviar e-mail.');
        } finally {
            setIsSending(false);
        }
    };

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

                <main className="flex-grow flex flex-col items-center justify-center py-28 px-6 sm:px-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center">Contato</h1>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 sm:p-10 rounded-lg shadow-xl">
                        <div className="mb-6">
                            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="name">Nome</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                rows={5}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                            disabled={isSending}
                        >
                            {isSending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                    {responseMessage && <p className="mt-4 text-lg text-blue-400 text-center">{responseMessage}</p>}
                </main>

                <footer className="w-full bg-gray-900 py-6">
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

export default Contact;
