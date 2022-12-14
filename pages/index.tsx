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
      <main className='pt-[25px] h-[160vh]'>
        <div id='div' className='text-6xl font-bold text-center'>
        <div>
  <span>ITS TIME TO</span>
  <br></br>
  <span id="L">U</span>
  <span id="I">P</span>
  <span id="G">G</span>
  <span id="H">R</span>
  <span id="T">A</span>
  <span id="I">D</span>
  <span id="T">E</span>
</div>
        </div>
        <div className='pt-[100px] px-[150px]'>
          <h1 className='text-4xl font-bold'>Start Improving Your Server</h1>
          <div className='pt-[10px] font-medium'>
          <p className='text-gray-500'>Nuctorno will try improve your server and user</p>
          <p className='text-gray-500'>experiance to the max. Nuctorno strives to make your</p>
          <p className='text-gray-500'>server a fun and safe enviorment!</p>
          </div>
          <div className='pt-[10px]'>
          <a href={botInvite}><button className='w-[200px] h-[40px] rounded-full bg-white text-black text-center hover:bg-black hover:border-2 hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>invite</button></a>
          <a href='https://discord.gg/Fwy6M9HNTs' className='ml-4'><button className='w-[200px] h-[40px] rounded-full bg-white text-black text-center hover:bg-black hover:border-2 hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>View More</button></a>
          </div>
        </div>

{/*news*/}

        <div className='font-bold text-center text-black pt-[460px]'>
          <h1 className='text-5xl'>Whats New?</h1>
        </div>

        <div className='px-[75px] pt-[60px]'>
        <a href='https://proxy-studios.vercel.app/' className='inline-block'>  <div className='w-[500px] h-[500px] rounded-lg bg-[url(https://cdn.discordapp.com/icons/1034461452746104862/9275fabc3fe75b3abcfb613de918fb75.webp?size=1024)] bg-cover hover:translate-y-[-5px] transition duration-200 ease-in-out'>
            <div className='px-[20px] pt-[400px]'>
              <h1 className='text-3xl font-bold'>New Website For Our Team</h1>
              <p className='text-gray-500'>
                The PROXY STUDIOS team, have created a new website check it out!
              </p>
            </div>
         </div>
         </a>

         <a href='/blog/theglitch' className='inline-block ml-20'>  <div className='w-[500px] h-[500px] rounded-lg bg-[url(https://wallpapersmug.com/download/3840x2160/a34fb3/glitch-art-lines-curvy-abstract-4k.jpg)] bg-cover hover:translate-y-[-5px] transition duration-200 ease-in-out'>
            <div className='px-[20px] pt-[430px]'>
              <h1 className='text-3xl font-bold'>The GLITCH</h1>
              <p className='text-gray-500'>
                Something is happening to the bot? What? Read more...
              </p>
            </div>
         </div>
         </a>
        </div>
      </main>
    </div>
  )
}

export default Home
