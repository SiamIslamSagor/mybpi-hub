import { useState } from "react";
import { RegisterForm } from "../ui/shared/RegisterForm";
import StudentVerify from "../ui/utils/StudentVerify";

const Register = () => {
  const [isVerifiedStudent, setIsVerifiedStudent] = useState(false);

  return (
    <section className="darkk max-sm:px-2 min-h-screen flex items-center justify-center">
      {isVerifiedStudent ? (
        <RegisterForm />
      ) : (
        <StudentVerify
          isVerifiedStudent={isVerifiedStudent}
          setIsVerifiedStudent={setIsVerifiedStudent}
        />
      )}
    </section>
  );
};

export default Register;
