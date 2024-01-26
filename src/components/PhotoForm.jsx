import { useState } from "react";
import "./PhotoForm.scss";

export default function PhotoForm(props) {
  const { coverId, url, title: originalTitle, id, album_id } = props;
  const [title, setTitle] = useState(originalTitle);

  const deletePhoto = () => {};
  const updatePhoto = () => {};
  const setAlbumCover = () => {};

  const handleChange = (event) => setTitle(event.target.value);

  const handleUpdate = (event) => {
    event.preventDefault();
    updatePhoto(id, title);
  };
  const handleCover = (event) => {
    event.preventDefault();
    setAlbumCover(album_id, id);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    deletePhoto(id);
  };

  return (
    <article className="PhotoForm">
      <img src={url} title={title} />
      <div>
        <form onSubmit={handleUpdate}>
          <input value={title} placeholder="Enter a title" onChange={handleChange} />
          <button>Update</button>
        </form>
        <button disabled={coverId === id} onClick={handleCover}>
          Cover
        </button>
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </article>
  );
}
