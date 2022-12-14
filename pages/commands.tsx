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
        <div className='bg-nr w-[800px] h-[200px] rounded-lg text-center'>
        ?announce | ?prefix | ?set-suggestion | ?age | ?banner | ?bio | ?cat | ?clap | ?dadjoke | ?delprofile | ?dog | ?emoji | ?flip | ?gay | ?hex | ?kiss | ?location | ?meme | ?pfp | ?profile | ?valid | ?avatar | ?bugreport | ?channelinfo | ?cmd | ?emojis | ?help | ?invite | ?membercount | ?news | ?proxy-studios | ?roleinfo | ?serverinfo | ?stats | ?voted | ?whois | ?add-mod | ?delete-mod | ?list-mod | ?mod | ?set-audit-log | ?ban | ?kick | ?note | ?notes | ?purge | ?remove-note | ?remove-warn | ?slowmode | ?unban | ?warn | ?warnings | ?add-news | ?del-news | ?listservers | ?respond | ?suggest
        </div>
      </main>
    </div>
  )
}

export default Home
