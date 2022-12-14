import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header';
let botInvite = 'https://discord.com/api/oauth2/authorize?client_id=1030807295661187163&permissions=8&scope=bot%20applications.commands';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Nuctorno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <main className='pt-[25px] flex justify-center'>
       <h1 className='font-bold text-5xl'>THE GLITCH HAS CONSUMED THIS!</h1>
      </main>
    </div>
  )
}

export default Home
