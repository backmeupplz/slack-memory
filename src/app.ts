// Load env variables
require('dotenv').config({ path: `${__dirname}/../.env` })
// Dependencies
import { RTMClient } from '@slack/client'

// Create client
const rtm = new RTMClient(process.env.TOKEN)
// Work on message
rtm.on('message', message => {
  console.log(
    `(channel:${message.channel}) ${message.user} says: ${message.text}`
  )
})
// Start RTM
rtm.start()
