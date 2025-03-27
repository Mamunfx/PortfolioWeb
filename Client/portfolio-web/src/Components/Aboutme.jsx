import React from 'react';

const Aboutme = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold my-12 mt-20 text-center">About Me</h1>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/6Y5jLqB/nicole-green-Qgi-Aey-GUUVQ-unsplash.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="absolute right-12 w-2/3  flex flex-col items-end">
                        <h1 className="mb-5 text-5xl font-bold">Hi there</h1>
                        <p className="mb-5 w-4/6 text-right ">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='grid grid-cols-2 gap-4 text-xl border-b-2'>
                            <p className='text-left'>Name : <p>Md. Mamun</p></p>
                            <p className='text-left'>Email : <p>md01994@gmail.com</p></p>
                            <p className='text-left'>Phone : <p>01881231528</p></p>
                            <p className='text-left'>Twitter : <p>Freelancer10</p></p>
                        </div>
                        <div className='flex space-x-4 '>
                        <button className="btn btn-primary">Contact Me</button>
                        <button className="btn btn-primary">Downloa CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
