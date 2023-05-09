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
        <div className='pt-[30px] px-[500px]'>
            <div className='bg-black bg-opacity-50 rounded-md w-[900px] h-[400px]'>
                <div className='inline-block px-[40px] pt-[30px]'>
                    <img className='rounded-full w-[200px] h-[200px] inline-block' src='https://cdn.discordapp.com/avatars/952166363479289866/54d2f19586c4ae90b15a760e9df915a6.png?size=512'></img>
                    <h1 className='text-7xl font-bold inline-block ml-10'>Aleks!</h1>
                    <p className='font-medium pt-[20px]'>Hey! My names aleks and im a 15 year old lad trying to make it. I started coding somewhere in lockdown</p>
                    <p className='font-medium'>when my wifi was out and i was using my mobile data looking up tutorials! From that point on i enjoyed coding</p>
                    <p className='font-medium'>websites and other projects such as minecraft plugins or discord bots!</p>
                </div>
            </div>
            <div className='pt-[40px]'>
            <div className='bg-black bg-opacity-50 rounded-md w-[900px] h-[200px]'>
                <div className='text-center pt-[10px]'>
                    <h1 className='font-bold text-5xl'>Socials</h1>
                    <a href='https://www.discordapp.com/users/952166363479289866'><div className='bg-[url(https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-flat-style-available-svg-png-eps-10.png)] rounded-full w-[100px] h-[100px] bg-cover inline-block'></div></a>
                </div>
            </div>
            </div>
        </div>
       </main>
    </div>
  )
}

export default Home
