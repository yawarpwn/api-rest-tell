import app from './app'
import './database'

app.listen(app.get('port'), () => {
	console.log('Servidor levantado', app.get('port'))
})
