import {Router} from 'express'
const router = Router()

import {
	getProducts, 
	createProduct, 
	getProduct, 
	updateProduct, 
	deleteProduct
} from './productControllers'

router.get('/proteccion-vial', getProducts)

router.get('/proteccion-vial/:id', getProduct)

router.post('/proteccion-vial', createProduct)

router.delete('/proteccion-vial/:id', deleteProduct)

router.put('/proteccion-vial/:id', updateProduct)

export default router


