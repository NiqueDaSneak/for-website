import React, {useState} from 'react'
import useDarkMode from 'use-dark-mode'
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import axios from 'axios'
import video from '../assets/video/run2.mp4'
import logoDark from '../assets/imgs/logo-dark.svg'
import logoLight from '../assets/imgs/logo-light.svg'
import '../assets/styles/homeStyles.css'
import EmbedVideo from '../components/EmbedVideo'

const Home = () => {

  const [email, setEmail] = useState('')

  const darkMode = useDarkMode()

  return (
    <>
      <MobileView>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            zIndex: 1,
            width: '100%',
          }}>
            <div style={{
              height: '100vh',
              width: '100%',

            }}>
              <img
                alt=''
                style={{ width: '40%' }}
                src={logoDark}
              />
            </div>
            <div style={{
              height: '100vh',
              width: '100%',
              backgroundColor: 'blue' 
            }} />
          </div>
          <EmbedVideo
            src={video}
          />
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
            backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-light.png')`
          }}>
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
                width: '20%',
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
              {/* <span
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '24pt',
                    color: '#e1e1e1',
                  }}
                >
                  For
                </span> */}
              <span
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: '16pt',
                  color: darkMode.value ? '#222220' : '#e1e1e1',
                }}
              >
              What are you here for?
              </span>
            </div>
            {/* <div
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  }}>
                Submit
                </button>
              </div> */}
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
              // poster=''
              loop
              muted
              autoPlay
              playsInline
              src={video}
            />
          </div>
        </div>
      </BrowserView>
    </>
  )
}

export default Home
