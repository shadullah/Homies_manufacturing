import React from 'react';
import ceo from '../../../../Images/Mine.png'
import growBG from '../../../../Images/grow.jpg'
import { convertToHsl } from 'daisyui/src/colors/functions';

const CEO = () => {
    return (
        <section style={{
            background: `url(${growBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "gray"
        }} className='flex rounded-lg my-28 justify-center items-center'>
            <div className='flex-1 hidden lg:block ml-20'>
                <img className='mt-[-100px]' src={ceo} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-zinc-500 font-bold'>Meet With The CEO</h3>
                <h2 className='text-3xl text-orange-500 font-bold py-10'>Shad Ullah Sakib</h2>
                <b><p className='text-slate-500'>For last 2 years, Our leader Shad Ullah Sakib continues to grow our company <br /> with his consistency, integrity and punctuality. His vision will inspire you.</p></b>
            </div>
        </section>
    );
};

export default CEO;