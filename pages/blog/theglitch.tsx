import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
let botInvite = 'https://discord.com/api/oauth2/authorize?client_id=1030807295661187163&permissions=8&scope=bot%20applications.commands';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Nuctorno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <main className=''>
        <div className='w-full h-[400px] bg-[url(https://wallpapersmug.com/download/3840x2160/a34fb3/glitch-art-lines-curvy-abstract-4k.jpg)]'></div>
        <div className='text-5xl font-bold px-[300px] pt-[10px]'>
            THE GLITCH?
        </div>
        <div className='pt-[10px] px-[310px]'>
            V0.34
        </div>
        <div className='pt-[20px] px-[310px]'>
            Hello, for some reason the bot is being taken over by... the glitch? Beware its a deadly glitch! Our team is trying to currently battle it out but we might need backup!
            <br></br>
            Its time to fight. We will give you weapons and everything you need, help us battle this glitch! The bot can send you random bits of code. We must win or we can be doomed forever.
            <br></br>
            Its time to break in and take back what is ours.
            <br></br>
            <br></br>           
             <a href={botInvite} className='pt-[10px]'><button className='w-[200px] h-[40px] rounded-full bg-white text-black text-center hover:bg-black hover:border-2 hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>Fight</button></a>
        </div>
      </main>
    </div>
  )
}

export default Home
