import {Router} from 'express'
const router = Router()

import {
	getProducts, 
	createProduct, 
	getProduct, 
	updateProduct, 
	deleteProduct
} from './productControllers'
import * as cintasCtr from './cintasControllers'

router.get('/proteccion-vial', getProducts)
router.get('/cintas', cintasCtr.getCintas)

router.get('/proteccion-vial/:id', getProduct)
router.get('/cintas/:id', cintasCtr.getCinta)

router.post('/proteccion-vial', createProduct)
router.post('/cintas', cintasCtr.createCinta)

router.delete('/proteccion-vial/:id', deleteProduct)
router.delete('/cintas/:id', cintasCtr.deleteCinta)

router.put('/proteccion-vial/:id', updateProduct)
router.put('/cintas/:id', cintasCtr.updateCinta)

export default router


