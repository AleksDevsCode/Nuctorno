import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header';
let botInvite = 'https://discord.com/api/oauth2/authorize?client_id=1030807295661187163&permissions=8&scope=bot%20applications.commands';

const Home: NextPage = () => {
  return (
    <div className="bg-[url(https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w)] bg-cover h-screen text-white">
      <Head>
        <title>Apex websites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <main className='pt-[25px]'>
        <div className='px-[100px]'>
          <h1 className='font-bold text-5xl'>Create a stunning website!</h1>
          <p className='pt-[10px] font-medium'>Looking for a website developer who can create a stunning website</p>
          <p className='font-medium'> that perfectly represents your brand? Look no further! We are here to help.</p>
          <div className='pt-[10px]'>
          <a href='/about'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-40 text-white text-center hover:bg-black  hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>About</button></a>
          <a href='https://discord.gg/E6q2yZw5pg'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-40 text-white text-center hover:bg-black  hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>Hire</button></a>

          </div>
        </div>
       </main>
    </div>
  )
}

export default Home
