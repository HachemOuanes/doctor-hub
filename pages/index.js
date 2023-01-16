import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google'
import doctor1 from '../public/doctor-images/4.jpg'
import Navbar from '../components/navbar'
import Doctor from '../components/doctor'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })
import logo from '../public/icpc.png'
import data from '../public/data/doctor.json'

// import CustomDisclosure from '../components/disclosure'

export default function Home() {

  const [doctors, setDoctors] = useState({})
  const [current, setCurrent] = useState({ data: [0, 0, 0, 0] })

  useEffect(() => {
    setDoctors(data)
    console.log(data)
  }, [])

  useEffect(() => {
    if (doctors.data) {
      const doctor = {
        id: doctors.data[0]['id'],
        picture_id: doctors.data[0]['idmed'],
        name: doctors.data[0]['Médecin'] + ' ' + doctors.data[0]['Prénom'],
        turnover: doctors.data[0]['CA'],
        basket: doctors.data[0]['Paniers Moyens'],
        hours: doctors.data[0]['heure'],
        hourlyPay: doctors.data[0]['tauxhoraire'],
        acts: doctors.data[0]['Actes par vacation'],
        picture: doctor1,
        data: [parseFloat(doctors.data[0]["Nombre d'actes"]), parseFloat(doctors.data[0]['Vacation']), parseFloat(doctors.data[0]['consultation']), parseFloat(doctors.data[0]['examen'])]
      }
      setCurrent(doctor)
    }
    else {
      console.warn('still loading data...')
    }
  }, [doctors])


  const Farward = () => {
    const id = parseFloat(current.id) + 1
    import(`../public/doctor-images/${doctors.data[id]['idmed']}.jpg`)
      .then((picture) => {
        const doctor = {
          id: id,
          name: doctors.data[id]['Médecin'] + ' ' + doctors.data[id]['Prénom'],
          turnover: doctors.data[id]['CA'],
          basket: doctors.data[id]['Paniers Moyens'],
          hours: doctors.data[id]['heure'],
          hourlyPay: doctors.data[id]['tauxhoraire'],
          acts: doctors.data[id]['Actes par vacation'],
          picture: picture,
          data: [parseFloat(doctors.data[id]["Nombre d'actes"]), parseFloat(doctors.data[id]['Vacation']), parseFloat(doctors.data[id]['consultation']), parseFloat(doctors.data[id]['examen'])]
        }
        setCurrent(doctor)
      });
  }

  const Backward = () => {
    const id = parseFloat(current.id) - 1
    import(`../public/doctor-images/${doctors.data[id]['idmed']}.jpg`)
      .then((picture) => {
        const doctor = {
          id: id,
          name: doctors.data[id]['Médecin'] + ' ' + doctors.data[id]['Prénom'],
          turnover: doctors.data[id]['CA'],
          basket: doctors.data[id]['Paniers Moyens'],
          hours: doctors.data[id]['heure'],
          hourlyPay: doctors.data[id]['tauxhoraire'],
          acts: doctors.data[id]['Actes par vacation'],
          picture: picture,
          data: [parseFloat(doctors.data[id]["Nombre d'actes"]), parseFloat(doctors.data[id]['Vacation']), parseFloat(doctors.data[id]['consultation']), parseFloat(doctors.data[id]['examen'])]
        }
        setCurrent(doctor)
      });
  }

  return (
    <>
      <Head>
        <title>Doctor Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <main className='flex flex-col justify-start items-center p-4 min-h-full'>
          <span className='p-2 2xl:fixed left-2 w-80 sm:relative'>
            <div className='shadow-sm flex flex-col items-center justify-center space-y-2 p-6 m-2  bg-gray-700 rounded border-2'>
              <div className='flex space-x-2'>
                <h2 className="text-1xl text-white">Nb d&apos;actes total</h2>
              </div>
              <h2 className="text-2xl text-white">44,449</h2>
            </div>
            <div className='shadow-sm flex flex-col items-center justify-center space-y-2 p-6 m-2  bg-gray-700 rounded border-2'>
              <div className='flex space-x-2'>
                <h2 className="text-1xl text-white">Nb de vacation total</h2>
              </div>
              <h2 className="text-2xl text-white">6,274</h2>
            </div>
          </span>
          <div className='flex justify-center items-center '>
            <span className='flex border-2 border-gray px-5 py-36 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer' onClick={() => Backward()}>
              <FiChevronLeft size={20} />
            </span>
            <div className='border-2 border-gray/30 mx-6 p-2'>
              <Doctor name={current.name} turnover={current.turnover} basket={current.basket} hours={current.basket} hourlyPay={current.hourlyPay} acts={current.acts} picture={current.picture} data={current.data} />
            </div>
            <span className='flex border-2 border-gray px-5 py-36 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer' onClick={() => Farward()}>
              <FiChevronRight size={20} />
            </span>
          </div>
        </main>
      </main>

    </>
  )
}
