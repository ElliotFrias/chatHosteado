import express from 'express'
import dotenv from 'dotenv'
import http from 'node:http'
import { Server } from 'socket.io'
import { obtainHour } from './src/Hour.js'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const PORT = process.env.PORT ?? 3000

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })

  socket.on('message', (message) => {
    console.log(message)
    const userName = message.from || 'Anonymous'
    const hour = message.hour || obtainHour()

    console.log({ userName })

    socket.broadcast.emit('message', {
      body: message.body,
      from: userName,
      hour: hour,
    })
  })
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
