import { Sequelize, DataType, DataTypes } from "sequelize";
const sequelize = new Sequelize("Admin", "Lanre", "Ismo", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

const connect = () => {
  sequelize
    .authenticate()
    .then((success) => console.log("database connected"))
    .catch((e) => console.log(e));

  const Room = sequelize.define(
    "class room",
    {
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roomId:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lecturerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  const Student = sequelize.define("Attendance", {
    regNumber: {
     
        type: DataTypes.STRING,
        allowNull: false,
      
    }
  })
  return {
    Room, Student
  }
};
connect();
export default connect;
