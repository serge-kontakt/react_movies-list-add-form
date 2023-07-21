import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [isValidImg, setIsValidImg] = useState(true);
  const [isValidImdb, setIsValidImdb] = useState(true);

  const cantSubmit = (
    !(title.trim() && imgUrl.trim() && imdbUrl.trim()
    && imdbId.trim() && isValidImg && isValidImdb)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    });

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
    setIsValidImg(true);
    setIsValidImdb(true);
    setCount((countPrev) => countPrev + 1);
  };

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={handleSubmit}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        setIsValidImg={setIsValidImg}
        setIsValidImdb={setIsValidImdb}
        onChange={(value) => setTitle(value)}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        setIsValidImg={setIsValidImg}
        setIsValidImdb={setIsValidImdb}
        onChange={(value) => setDescription(value)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        setIsValidImg={setIsValidImg}
        setIsValidImdb={setIsValidImdb}
        onChange={(value) => setImgUrl(value)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        setIsValidImg={setIsValidImg}
        setIsValidImdb={setIsValidImdb}
        onChange={(value) => setImdbUrl(value)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        setIsValidImg={setIsValidImg}
        setIsValidImdb={setIsValidImdb}
        onChange={(value) => setImdbId(value)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={cantSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};