const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/campuses', controllers.createCampus);
router.get('/campuses', controllers.getAllCampuses);
router.get('/campuses/:campusId', controllers.getCampusById);
router.put('/campuses/:campusId', controllers.updateCampus);
router.delete('/campuses/:campusId', controllers.deleteCampus);
router.post('/students', controllers.createStudent);
router.get('/students', controllers.getAllStudents);
router.get('/students/:studentId', controllers.getStudentById);
router.put('/students/:studentId', controllers.updateStudent);
router.delete('/students/:studentId', controllers.deleteStudent);
module.exports = router;