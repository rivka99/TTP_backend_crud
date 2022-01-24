
module.exports = (Sequelize, DataTypes) => {
  const Campus = Sequelize.define('Campus', {
  // campusID: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primary: true
  // },
  name:{
      type: DataTypes.STRING,
      allowNull: false
  },
  imgURL:{
      type: DataTypes.STRING,
      defaultValue: "https://wpr-public.s3.amazonaws.com/wprorg/styles/resp_orig_custom_user_wide_1x/s3/s3fs-public/images/shows/Bascom%20Hall%20snow.jpg?itok=ZiqJL8Xj"
  },
  address:{
      type: DataTypes.STRING,
      allowNull: false
  },
  description:{
      type: DataTypes.STRING,
      allowNull: false
  }

  }, {});
  Campus.associate = function(models) {
    // associations can be defined here
    Campus.belongsToMany(models.Student, {
      foreignKey: 'id',
      as: "Student",
      through: "Students",
    });
   
  };
  return Campus;
};