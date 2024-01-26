import AlbumList from '@/components/AlbumList';
import { fetchAlbumsByUserId } from '@/actions/albumActions';

export default async function AlbumsPage(props) {

  let albums;
  try {
    albums = await fetchAlbumsByUserId();
  } catch (err) {
    console.log(err);
    albums = [];
  }


  console.log("albums", albums);

  return (
    <div>
      <h1>This is the AlbumsPage</h1>
      <p>
        <AlbumList albums={albums}></AlbumList>
      </p>
    </div>
  );
}