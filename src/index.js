import { app } from './app/index.js'

const PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Servidor em PORT: ${PORT}`)
})