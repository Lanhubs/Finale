import { Sequelize,  DataTypes } from "sequelize";
const sequelize = new Sequelize("Finale", "root", "Lanhubs2001$$", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  // database: "Finale"
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
      roomId: {
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
      startTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endTime: {
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
    },
  });
  sequelize.sync().then(s=>console.log("tables established")).catch(e=>console.log(e))
  return {
    Room,
    Student,
  };
};
connect();
export default connect;
