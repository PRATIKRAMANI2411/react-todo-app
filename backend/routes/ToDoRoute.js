const {Router} = require('express');
const { getToDo, SaveToDo, UpdateToDo, DeleteToDo } = require('../controllers/ToDoController');
const router = Router();

router.get('/', getToDo);
router.post('/save', SaveToDo);
router.post('/update', UpdateToDo);
router.post('/delet', DeleteToDo)

module.exports = router;