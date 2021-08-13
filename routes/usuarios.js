
const { Router } = require('express');
const { check } = require('express-validator');
const { validate } = require('./../middlewares/validation')

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const Role = require('../models/Role');
const { isRoleValid, existsEmail } = require('../helpers/db-validators');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
    check('name', 'Name required').not().isEmpty(),
    check('password', 'Password length must be 6 or more').isLength({ min: 6 }),
    check('email', 'Email not valid').isEmail(),
    check('email').custom(existsEmail),
    check('role').custom(isRoleValid),
    validate
], usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;