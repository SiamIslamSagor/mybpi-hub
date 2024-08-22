import students from "./assets/students.json";

const studentVerify = (roll, registration) => {
  //   console.log(roll, registration);
  const verified = students.Sheet1.find(
    student => student.Roll == roll && student["Reg No"] == registration
  );
  //   console.log(verified);
  return verified ? true : false;
};

export default studentVerify;
