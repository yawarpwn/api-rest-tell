import app from './app'
import './database'

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Servidor levantado en http:localhost//${PORT}`)
})
