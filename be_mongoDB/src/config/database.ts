import mongoose, { ConnectOptions } from 'mongoose'
import { TDBState } from '~/type'

const dbState: TDBState[] = [
  { value: 0, label: 'Disconnected' },
  { value: 1, label: 'Connected' },
  { value: 2, label: 'Connecting' },
  { value: 3, label: 'Disconnecting' }
]

const access: ConnectOptions = {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASSWORD,
  dbName: process.env.DATABASE_NAME,
  maxConnecting: 10
}

const connection = async () => {
  await mongoose.connect(process.env.DATABASE_HOST ?? '', access)
  const state: number = Number(mongoose.connection.readyState)
  const connectDBStatus = dbState.find((s: TDBState) => s.value === state)
  if (connectDBStatus) {
    console.log(connectDBStatus.label, 'to database')
  }
}

module.exports = connection
