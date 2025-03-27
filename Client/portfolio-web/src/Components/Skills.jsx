import React from 'react';

const Skills = () => {
    return (
      <div className='my-8'>
        <div>
            <h1 className='text-center font-bold text-4xl my-20'>Skills Set</h1>
        </div>
        <div className='grid grid-cols-2 w-4/5 mx-auto gap-8'>
        <div className='text-lg space-y-6'>
          <h1 className='text-3xl font-semibold'>Every Day is a New Challenge</h1>
          <p>
            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at
            sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
            efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            quis leo. Nulla in feugiat elit. 
          </p>
          <p>
          Phasellus accumsan scelerisque
            dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in
            enim elementum varius. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae
          </p>
          <button className='btn btn-primary'>Contact Me</button>
        </div>
        <div className='text-xl space-y-16 font-semibold'>
            <div className='flex justify-between'>
                <h1>Web Design</h1>
                <p>100%</p>
            </div>
            <div className='flex justify-between'>
                <h1>Photography</h1>
                <p>90%</p>
            </div>
            <div className='flex justify-between'>
                <h1>Coding</h1>
                <p>100%</p>
            </div>
            <div className='flex justify-between'>
                <h1>Copywriting</h1>
                <p>50%</p>
            </div>
        </div>
        </div>
      </div>
    );
};

export default Skills;