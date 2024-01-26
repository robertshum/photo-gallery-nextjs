import "./AlbumListItem.scss";

export default function AlbumListItem(props) {
  const { title, url, id } = props;
  return (
    <a href={`/albums/${id}`}>
      <article style={{ backgroundImage: `url(${url})` }} className="AlbumListItem">
        <h1>{title}</h1>
      </article>
    </a>
  );
}
