import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';

import './Authorisation.scss';

const Authorisation = () => {
  const [userCredantials, setUserCredantials] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const handleChange = (event: any) => {
    const { value, name: targetName } = event.target;

    setUserCredantials({ ...userCredantials, [targetName]: value });
  };
  return (
    <div>
      <form className="forum__registaration-signup">
        <FormInput
          type="email"
          name="email"
          label="Write email"
          value={userCredantials.email}
          handleChange={handleChange}
        />

        <FormInput
          type="text"
          name="username"
          label="Write Your Name"
          value={userCredantials.username}
          handleChange={handleChange}
        />

        <FormInput
          type="number"
          name="phone"
          label="Write phone"
          value={userCredantials.phone}
          handleChange={handleChange}
        />

        <FormInput
          type="text"
          name="username"
          label="Write username"
          value={userCredantials.username}
          handleChange={handleChange}
        />

      </form>
    </div>
  );
};

export default Authorisation;
