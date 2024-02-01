import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-green-900 text-gray-300 py-y px-2 b-0'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Contatos</h6>
                <ul>
                    <li className='py-1'>Tel:(85)3453-3500</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Endereço</h6>
                <ul>
                    <li className='p-1'>
                    Rua Dr. Pontes Neto 800
                    Eng. Luciano Cavalcante
                    Fortaleza/CE - CEP 60813-600
                    </li>
                </ul>
            </div>
           {/* <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>

                </ul>
            </div>*/}
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Tribunal Regional Eleitoral. Todos os direitos reservados</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer