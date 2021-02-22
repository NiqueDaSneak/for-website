import React, {useEffect} from "react"
import video from '../assets/media/test.mp4'
import logoDark from '../assets/imgs/logo-dark.svg'
import logoLight from '../assets/imgs/logo-light.svg'
import '../assets/styles/homeStyles.css'
import useDarkMode from 'use-dark-mode';

const Home = () => {
  const EmbedVideo = ({src, className}) => {
    return (
      <div
        style={{ height: '100%', width: '100vw'}}
        dangerouslySetInnerHTML={{
          __html: `
         <video
          width='${130}%'
          loop 
          muted 
          autoplay 
          playsinline 
          src="${src}" 
          class="${className}"/>,
       `}}></div>
    )
  }

  const darkMode = useDarkMode();
  
  return (
    <div>
      <div style={{ width: '24%', marginLeft: '40%', position: 'absolute', top: 30, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ width: '100%', }} src={darkMode.value ? logoDark : logoLight} />
        <span style={{fontFamily: 'sans-serif', fontSize: '16pt', color: darkMode.value ? '#222220' : '#e1e1e1'}}>For</span>
      </div>
      <div style={{ borderRadius: 10, backdropFilter: 'blur(9px)', opacity: .9, backgroundColor: darkMode.value ? '#222220' : '#e1e1e1', height: '25%' ,width: '90%', marginLeft: '5%', position: 'absolute', bottom: 90, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <span style={{ fontSize: '16pt', color: darkMode.value ? '#e1e1e1' : '#222220'}}>Put your email to get updates!</span>
        <input placeholder="elon.musk@spaceX.com" style={{width: 300, padding: 10, backgroundColor: darkMode.value ? '#515151' : '#b1b1b1', color: darkMode.value ? '#b1b1b1' : '#515151', fontSize: '12pt', outline: 'none'}} />
        <button style={{width: 150, padding: 10, backgroundColor: '#009500', color: 'white', fontSize: '12pt', borderRadius: 10}}>Submit</button>
      </div>
      <EmbedVideo src={video} className='video' />

    </div>    
  )
}

export default Home