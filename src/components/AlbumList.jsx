import AlbumListItem from "./AlbumListItem";
import "./AlbumList.scss";

export default function AlbumList(props) {
  const { albums } = props;

  const parsedItems = albums.map((album) => <AlbumListItem key={album.id} {...album} />);

  return <section className="AlbumList">{parsedItems}</section>;
}
