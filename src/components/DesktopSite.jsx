import React, { useState, useRef } from "react"
import video from "../assets/video/run2.mp4"
import logoDark from "../assets/imgs/logo-dark.svg"
import useOnScreen from "./useOnScreen"
import TuneInCartoon from "../assets/imgs/tune-in-cartoon.svg"
import AlignCartoon from "../assets/imgs/align-cartoon.svg"
import ActCartoon from "../assets/imgs/act-cartoon.svg"

const DesktopSite = () => {
  const [email, setEmail] = useState("")
  const [gotEmail, setGotEmail] = useState(false)

  const makeHeaderRef = useRef()
  const makeHeader = useOnScreen(makeHeaderRef, "0px")

  const inputRef = useRef()

  return (
    <div
      style={{
        display: "flex",
        background:
          "linear-gradient(180deg, rgba(55,140,33,1) 0%, rgba(189,189,189,1) 100%)",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "30%",
            marginTop: "10%",
            backgroundColor: makeHeader ? "rgba(66,66,66, 0.99)" : null,
            transition: "background-color 1s",
            position: makeHeader ? "sticky" : null,
            alignItems: "center",
            top: 0,
            padding: "2%",
          }}
        >
          <img
            alt=""
            style={{
              marginLeft: makeHeader ? 0 : "40%",
              width: makeHeader ? "8%" : "20%",
              transition: "width .8s, margin-left .8s",
            }}
            src={logoDark}
          />
          {makeHeader && (
            <button
              onClick={() => inputRef.current.focus()}
              style={{
                // marginRight: '4%',
                padding: "1%",
                border: "none",
                backgroundColor: "#378C21",
                fontSize: "11pt",
                borderRadius: 20,
                height: "80%",
              }}
              type="button"
            >
              Get an invite
            </button>
          )}
        </div>
        <div
          style={{
            width: "40%",
            marginLeft: "30%",
            marginTop: "40vh",
            marginBottom: "40vh",
            paddingTop: "2%",
            paddingBottom: "2%",
            backgroundColor: "#212121",
            color: "#EEEEEE",
          }}
        >
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "12pt",
            }}
          >
            Tune in. Align. Act.
          </h1>
        </div>
        <div
          ref={makeHeaderRef}
          style={{
            paddingTop: "8vh",
            paddingBottom: "14vh",
            width: "100%",
          }}
        >
          <div style={{ marginBottom: "10vh" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                justifyContent: "space-around",
                height: "20vh",
              }}
            >
              <span
                style={{
                  width: "90%",
                  fontWeight: "400",
                  marginLeft: "5%",
                  fontSize: "12pt",
                  opacity: makeHeader ? 1 : 0,
                  transition: "opacity 2s",
                }}
              >
                Do you prefer to scroll timelines – or set your own? Do you
                think the best place to turn for answers is inward?
              </span>
              <span
                style={{
                  width: "90%",
                  fontWeight: "800",
                  marginLeft: "5%",
                  fontSize: "16pt",
                  opacity: makeHeader ? 1 : 0,
                  transition: "opacity 2s",
                  transitionDelay: "1s",
                }}
              >
                That’s who this app is For.
              </span>
            </div>
          </div>
          <div
            style={{
              marginTop: "20vh",
              marginBottom: "20vh",
            }}
          >
            <h1
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "20pt",
              }}
            >
              Tune In
            </h1>
            <img
              alt=""
              style={{
                width: "60%",
                marginLeft: "20%",
              }}
              src={TuneInCartoon}
            />
            <p
              style={{
                fontSize: "14pt",
                width: "80%",
                marginLeft: "10%",
                textAlign: "center",
              }}
            >
              Answer open-ended questions to get info on yourself
            </p>
          </div>
          <div
            style={{
              marginTop: "20vvh",
              marginBottom: "20vvh",
            }}
          >
            <h2
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "20pt",
              }}
            >
              Align
            </h2>
            <img
              alt=""
              style={{
                width: "60%",
                marginLeft: "20%",
              }}
              src={AlignCartoon}
            />
            <p
              style={{
                fontSize: "14pt",
                width: "80%",
                marginLeft: "10%",
                textAlign: "center",
              }}
            >
              Categorize your digital thoughts and form opportunities
            </p>
          </div>
          <div style={{ marginTop: "20vh" }}>
            <h2
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "20pt",
              }}
            >
              Act
            </h2>
            <img
              alt=""
              style={{
                width: "50%",
                marginLeft: "25%",
              }}
              src={ActCartoon}
            />
            <span
              style={{
                display: "block",
                fontSize: "14pt",
                width: "80%",
                marginLeft: "10%",
                textAlign: "center",
              }}
            >
              Turn perceived opportunities into tangible goals you can complete
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            backgroundColor: "green",
            alignItems: "center",
            padding: "2%",
          }}
        >
          <span
            style={{
              fontSize: "14pt",
              textAlign: "center",
            }}
          >
            What&apos;s your email?
          </span>
          <input
            type="email"
            ref={inputRef}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="elon.musk@spaceX.com"
            style={{
              fontSize: "16pt",
              width: "34%",
              border: "none",
              padding: "1%",
              borderRadius: "10px",
            }}
          />
          <button
            onClick={() => {
              const emailData = {
                email,
                requestedAt: new Date(),
              }

              // Add one line to the sheet
              fetch(
                "https://sheet.best/api/sheets/a490c2d4-3aca-479f-a9ba-4861562c47be",
                {
                  method: "POST",
                  mode: "cors",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(emailData),
                }
              )
                .then(r => r.json())
                .then(data => {
                  // The response comes here
                  console.log(data)
                  setGotEmail(true)
                  setEmail("")
                })
                .catch(error => {
                  // Errors are reported there
                  console.log(error)
                })
            }}
            style={{
              padding: "2%",
              border: "none",
              backgroundColor: gotEmail ? "lightgrey" : "#378C21",
              fontSize: "10pt",
              borderRadius: 20,
              width: "20%",
            }}
            disabled={gotEmail}
            type="button"
          >
            {gotEmail ? "Submitted" : "Request Access"}
          </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "20vh",
            backgroundColor: "rgba(66,66,66, 0.99)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "2%",
          }}
        >
          <img
            alt=""
            style={{
              marginLeft: "4%",
              height: "auto",
              width: "4%",
              transition: "width .8s, margin-left .8s",
            }}
            src={logoDark}
          />
          <span style={{ color: "white" }}>Copyright 2021</span>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "rgba(66, 66, 66, 0.99)",
          display: "flex",
          justifyItems: "flex-end",
        }}
      >
        <video
          height="100%"
          width="100%"
          // poster=''
          loop
          muted
          autoPlay
          playsInline
          src={video}
        />
      </div>
    </div>
  )
}

export default DesktopSite
