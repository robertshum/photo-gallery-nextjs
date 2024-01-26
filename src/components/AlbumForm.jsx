import { useState } from "react";
import "./AlbumForm.scss";

export default function AlbumForm(props) {
  const { title: originalTitle, albumId } = props;

  const [title, setTitle] = useState(originalTitle);

  const setAlbumTitle = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    setAlbumTitle(albumId, title);
  };

  const handleChange = (event) => setTitle(event.target.value);
  return (
    <form onSubmit={handleSubmit} className="AlbumForm">
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Enter Album Name"
      />
      <button>Save</button>
    </form>
  );
}
