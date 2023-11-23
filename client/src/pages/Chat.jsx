import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import '../css/Chat.css'
import { BsEmojiLaughing } from 'react-icons/bs'
import {
  IoAddOutline,
  IoVideocamOutline,
  IoCallOutline,
  IoSearch,
  IoFilter,
} from 'react-icons/io5'
import { LuSendHorizonal } from 'react-icons/lu'
import { MdOutlineGroups2 } from 'react-icons/md'
import { IoMdMore } from 'react-icons/io'

const getUserName = () => {
  const userName = localStorage.getItem('userName')
  return userName
}

const socket = io('/')

function Chat() {
  const obtainHour = () => {
    let todayDate = new Date()

    let hours = todayDate.getHours()
    let minutes = todayDate.getMinutes()
    let seconds = todayDate.getSeconds()

    let ampm = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12
    hours = hours ? hours : 12

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    let hour12 = hours + ':' + minutes + ' ' + ampm

    return hour12
  }
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: getUserName(),
      hour: obtainHour(),
    }
    setMessages((state) => [...state, newMessage])
    setMessage('')
    socket.emit('message', newMessage)
  }

  useEffect(() => {
    socket.on('message', receiveMessage)
    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message])

  return (
    <>
      <div className="container-general">
        <div className="container-contacts">
          <div className="options-contacts">
            <div className="opt">
              <div className="left-opt">
                <img
                  className="profile-Picture"
                  src="css/img/fotoPerfil.jpeg"
                />
              </div>
              <div className="right-opt">
                <MdOutlineGroups2 className="group-Icon" />
                <IoMdMore className="more-Icon" />
              </div>
            </div>
            <div className="search-contact">
              <div className="search-container">
                <IoSearch className="search-Icon" />
                <input
                  type="text"
                  className="search-contact-input"
                  placeholder="Search or start a new chat"
                />
              </div>
              <IoFilter className="filter-Icon" />
            </div>
          </div>
          <div className="contact-list">
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Argelia</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Anna Pau</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="../css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
            <div className="contact">
              <img
                className="profile-picture-contacts"
                src="css/img/fotoPerfil.jpeg"
              />
              <div className="contact-content">
                <p className="contact-list-name">Marco</p>
                <p className="last-message">Mensaje de alguien más...</p>
              </div>
              <div className="contact-date-div">
                <p className="contact-date">12/02/2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-chat">
          <div className="options">
            <div className="left-options">
              <img
                className="profile-picture-contact"
                src="css/img/fotoPerfil.jpeg"
              />
              <h3 className="contact-name">Grupo Chingonsote</h3>
            </div>
            <div className="right-options">
              <IoVideocamOutline className="videocall-Icon" />
              <IoCallOutline className="call-Icon" />
            </div>
          </div>
          <div className="messages">
            <ul>
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.from === getUserName()
                      ? 'our-message'
                      : 'not-our-message'
                  }
                >
                  <span className="message-username">{message.from}</span>
                  <span className="message-content">{message.body}</span>
                  <span className="message-hour">{message.hour}</span>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-messages">
              <div className="left-messages">
                <BsEmojiLaughing className="img" />
                <IoAddOutline className="img" />
              </div>
              <input
                type="text"
                className="new-message"
                placeholder="Type a message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="right-messages">
                <button type="submit" className="btn-send">
                  <LuSendHorizonal/>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chat
