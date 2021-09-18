import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

const Welcome = (props) => {
  const [values, setValues] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  });

  //   const [register, handleSubmit] = useForm({ shouldUseNativeValidation: true });
  const handleChange = () => {
    setValues({ ...values, [EventTarget.name]: EventTarget.value });
  };
  return (
    <div>
      <h1>
        Welcome, {values.firstName} {values.lastName}
      </h1>

      <form name='userName'>
        <label>
          FirstName
          <input
            value={values.firstName}
            name='firstName'
            onChange={handleChange}
          />
        </label>

        <label>
          LastName
          <input
            value={values.lastName}
            name='lastName'
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Welcome;
