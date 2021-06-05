import '../styles/forms.css';

const Info = ({ handleChange }) => {
  return (
    <div id='info'>
      <h3>Personal Info</h3>
      <input type='text' id='firstName' placeholder='First name' onChange={handleChange} />
      <input type='text' id='lastName' placeholder='Last name' onChange={handleChange} />
      <input type='text' id='title' placeholder='Title' onChange={handleChange} />
      <input type='text' id='address' placeholder='Address' onChange={handleChange} />
      <input type='phone' id='phone' placeholder='Phone number' onChange={handleChange} />
      <input type='email' id='email' placeholder='Email' onChange={handleChange} />
      <textarea id='description' placeholder='Description' onChange={handleChange} />
    </div>
  );
};

export default Info;
