module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
  // studentID: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primary: true
  // },
  firstName:{
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName:{
      type: DataTypes.STRING,
      allowNull: false
  },
  email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          isEmail: true,
          notEmpty: true,
      }
  },
  imageURL:{
      type: DataTypes.STRING,
      defaultValue: "https://publicdomainvectors.org/photos/1311935084.png"
  },
  gpa:{
      type: DataTypes.FLOAT,
      allowNull: false,
      validate:{
          min:0,
          max:4
      }
  }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.Campus, {
      foreignKey: 'id',
      as: "Campus",
      through: "Campuses"
    });
   
  };
  return Student;
};