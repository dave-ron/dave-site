import React from 'react';

const Hero = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
            <div>
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">I'm a passionate web developer creating beautiful and functional web applications.</p>
                <a href="#projects" className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
                    View My Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;