const models = require('../database/models');

const createCampus = async (req, res) => {
  try {
    const Campus = await models.Campus.create(req.body);
    return res.status(201).json({
        Campus,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllCampuses = async (req, res) => {
    try {
      const campuses = await models.Campus.findAll({
       
      });
      return res.status(200).json({ campuses });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const getCampusById = async (req, res) => {
    try {
      const { campusId } = req.params;
      const campus = await models.Campus.findOne({
        where: { id: campusId },
      
      });
      if (campus) {
        return res.status(200).json({ campus });
      }
      return res.status(404).send('Campus with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateCampus = async (req, res) => {
    try {
      const { campusId } = req.params;
      const [ updated ] = await models.Campus.update(req.body, {
        where: { id: campusId}
      });
      if (updated) {
        const updatedCampus = await models.Campus.findOne({ where: { id: campusId } });
        return res.status(200).json({ campus: updateCampus });
      }
      throw new Error('Campus not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const deleteCampus = async (req, res) => {
    try {
      const { campusId } = req.params;
      const deleted = await models.Campus.destroy({
        where: { id: campusId }
      });
      if (deleted) {
        return res.status(204).send("Campus deleted");
      }
      throw new Error("Campus not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
//Student functions: 

const createStudent = async (req, res) => {
    try {
      const Student = await models.Student.create(req.body);
      return res.status(201).json({
        Student,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
  
  const getAllStudents = async (req, res) => {
      try {
        const students = await models.Student.findAll({
         
        });
        return res.status(200).json({ students });
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }
  
    const getStudentById = async (req, res) => {
      try {
        const { studentId } = req.params;
        const student = await models.Student.findOne({
          where: { id: studentId },
        
        });
        if (student) {
          return res.status(200).json({ student });
        }
        return res.status(404).send('Student with the specified ID does not exists');
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }
  
    const updateStudent = async (req, res) => {
      try {
        const { studentId } = req.params;
        const [ updated ] = await models.Student.update(req.body, {
          where: { id: studentId}
        });
        if (updated) {
          const updatedStudent = await models.Student.findOne({ where: { id: studentId } });
          return res.status(200).json({ Student: updatedStudent });
        }
        throw new Error('Student not found');
      } catch (error) {
        return res.status(500).send(error.message);
      }
    };
  
    const deleteStudent = async (req, res) => {
      try {
        const { studentId } = req.params;
        const deleted = await models.Student.destroy({
          where: { id: studentId }
        });
        if (deleted) {
          return res.status(204).send("Student deleted");
        }
        throw new Error("Student not found");
      } catch (error) {
        return res.status(500).send(error.message);
      }
    };

module.exports = {
  createCampus, getAllCampuses, getCampusById, updateCampus, deleteCampus,
  createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent

}