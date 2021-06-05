import '../styles/forms.css';

const Info = ({ handleChange }) => {
  return (
    <div id='info'>
      <h3>Personal Info</h3>
      <input type='text' id='firstName' placeholder='First name' onInput={handleChange} />
      <input type='text' id='lastName' placeholder='Last name' onInput={handleChange} />
      <input type='text' id='title' placeholder='Title' onInput={handleChange} />
      <input type='text' id='address' placeholder='Address' onInput={handleChange} />
      <input type='phone' id='phone' placeholder='Phone number' onInput={handleChange} />
      <input type='email' id='email' placeholder='Email' onInput={handleChange} />
      <textarea id='description' placeholder='Description' onInput={handleChange} />
    </div>
  );
};

export default Info;
