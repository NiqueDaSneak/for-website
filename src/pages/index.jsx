/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import useDarkMode from 'use-dark-mode'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import video from '../assets/video/selfie.mp4'
import logoDark from '../assets/imgs/logo-dark.svg'
import logoLight from '../assets/imgs/logo-light.svg'
import '../assets/styles/homeStyles.css'

const Home = () => {
  const EmbedVideo = ({
    src, className 
  }) => (
    <div
      style={{
        height: '10vh',
        width: '100vw',
      }}
      dangerouslySetInnerHTML={{
        __html: `
         <video
          width='${100}%'
          poster=''
          loop 
          muted 
          autoplay 
          playsinline 
          src='${src}' 
          class='${className}'/>,
       `,
      }}
    />
  )

  const darkMode = useDarkMode()

  return (
    <>
      <MobileView>
        <div>
          <div
            style={{
              width: '24%',
              marginLeft: '40%',
              position: 'absolute',
              top: 30,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              alt=''
              style={{ width: '100%' }}
              src={darkMode.value ? logoDark : logoLight}
            />
            <span
              style={{
                fontFamily: 'sans-serif',
                fontSize: '16pt',
                color: darkMode.value ? '#222220' : '#e1e1e1',
              }}
            >
              For
            </span>
          </div>
          <div
            style={{
              borderRadius: 10,
              backdropFilter: 'blur(9px)',
              opacity: 0.9,
              backgroundColor: darkMode.value ? '#222220' : '#e1e1e1',
              height: '25%',
              width: '90%',
              marginLeft: '5%',
              position: 'absolute',
              bottom: 90,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '16pt',
                color: darkMode.value ? '#e1e1e1' : '#222220',
              }}
            >
              Put your email to get updates!
            </span>
            <input
              placeholder='elon.musk@spaceX.com'
              style={{
                width: 300,
                padding: 10,
                backgroundColor: darkMode.value ? '#515151' : '#b1b1b1',
                color: darkMode.value ? '#b1b1b1' : '#515151',
                fontSize: '12pt',
                outline: 'none',
              }}
            />
            <button
              type='submit'
              style={{
                width: 150,
                padding: 10,
                backgroundColor: '#009500',
                color: 'white',
                fontSize: '12pt',
                borderRadius: 10,
              }}
            >
              Submit
            </button>
          </div>
          <EmbedVideo
            src={video}
            className='video' />
        </div>
      </MobileView>
      <BrowserView>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#222220',
            backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')`
          }}
        >
          <div
            style={{
              width: '64%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '12%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                alt=''
                style={{
                  width: '100%',
                  marginBottom: 20
                }}
                src={logoDark}
              />
              <span
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: '24pt',
                  color: '#e1e1e1',
                }}
              >
                For
              </span>
            </div>
            <div
              style={{
                borderRadius: 10,
                backdropFilter: 'blur(9px)',
                opacity: 0.9,
                backgroundColor: '#3b3b3b',
                height: '20%',
                padding: '4%',
                width: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '16pt',
                  color: '#e1e1e1',
                }}
              >
                Put your email to get updates!
              </span>
              <input
                placeholder='elon.musk@spaceX.com'
                style={{
                  width: 300,
                  padding: 10,
                  backgroundColor: '#515151',
                  color: '#b1b1b1',
                  fontSize: '12pt',
                  outline: 'none',
                  border: 'none',
                  borderRadius: 10
                }}
              />
              <button
                type='submit'
                style={{
                  width: 150,
                  padding: 10,
                  backgroundColor: '#009500',
                  color: 'white',
                  fontSize: '12pt',
                  borderRadius: 10,
                  border: 'none'
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div
            style={{
              width: '36%',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <video
              height='100%'
              poster=''
              loop
              muted
              autoPlay
              playsinline
              src={video}
            />
          </div>
        </div>
      </BrowserView>
    </>
  )
}

export default Home
