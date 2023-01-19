import Image from 'next/image'
import React, { useState } from 'react'
import doctor1 from '../public/doctor-images/8.jpg'
import { FiDollarSign, FiShoppingBag, FiClock, FiTrendingUp } from "react-icons/fi";
import Chart from './chart.js'
import logo from '../public/logo-heart.png'

export default function Doctor({ name, turnover, basket, hours, hourlyPay, acts, picture, data }) {

    return (
        <div className='flex flex-col justify-start items-center'>
            <div className='flex flex-wrap justify-center items-center p-4 rounded '>
                <div className='max-w-sm overflow-hidden shadow-lg p-8 flex flex-col items-center space-y-6 rounded relative'>
                    <Image className='rounded border-4' src={picture} width={180} ></Image>
                    <Image className='absolute left-4 bottom-14' src={logo} ></Image>
                    <h2 className="text-xl text-center font-medium">Dr. {name}</h2>
                </div>
                <div className='flex justify-center flex-wrap max-w-xl p-2  '>
                    <div className='shadow-lg flex flex-col items-center justify-center space-y-2 p-8 m-2 w-52 rounded'>
                        <div className='flex space-x-2'>
                            <FiTrendingUp size={20} />
                            <h2 className="text-1xl">Chiffre D&apos;affaire</h2>
                        </div>
                        <h2 className="text-2xl">{turnover}</h2>
                    </div>
                    <div className='shadow-lg flex flex-col items-center justify-center space-y-2 p-8 m-2 w-52 rounded'>
                        <div className='flex space-x-2'>
                            <FiShoppingBag size={20} />
                            <h2 className="text-1xl">Panier moyen</h2>
                        </div>
                        <h2 className="text-2xl">{basket}</h2>
                    </div>
                    <div className='shadow-lg flex flex-col items-center justify-center space-y-2 p-8 m-2 w-52 rounded'>
                        <div className='flex space-x-2'>
                            <FiClock size={20} />
                            <h2 className="text-1xl">Heure</h2>
                        </div>
                        <h2 className="text-2xl">{hours}</h2>
                    </div>
                    <div className='shadow-lg flex flex-col items-center justify-center space-y-2 p-8 m-2 w-52 rounded'>
                        <div className='flex space-x-2'>
                            <FiDollarSign size={20} />
                            <h2 className="text-1xl">Taux Horaire</h2>
                        </div>
                        <h2 className="text-2xl">{hourlyPay}</h2>
                    </div>
                </div>
            </div>
            <section className='flex rounded flex-wrap justify-center items-center p-4 m-4'>
                <Chart data={data} />
                <div className='shadow-sm flex flex-col items-center justify-center space-y-2 p-8 m-2 w-52  border-2 border-gray rounded'>
                    <div className='flex space-x-2'>
                        <h2 className="text-1xl">Actes par vacation</h2>
                    </div>
                    <h2 className="text-2xl">{acts}</h2>
                </div>
            </section>
        </div>
    )
}
