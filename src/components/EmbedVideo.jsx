import React from 'react'

const EmbedVideo = ({src}) => (
  <div
    style={{
      position: 'fixed',
      top: 0
    }}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: `
         <video
          width='${100}%'
          loop 
          muted 
          autoplay 
          playsInline 
          src='${src}' 
          />,
       `,
    }}
  />
)

export default EmbedVideo