import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base">
        <span className="inline-block transform transition-transform duration-300 hover:rotate-12 cursor-pointer">
          👋
        </span>{' '}
        Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-64 mb-7 rounded-full md:px-6 md:py-3 text-sm bg-yellow-200 placeholder:text-stone-400  sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
