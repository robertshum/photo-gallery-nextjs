import { fetchPhotosFromAlbumId } from "@/actions/albumActions";
import PhotoList from '@/components/PhotoList';

export default async function AlbumPage(props) {

  const { albumId } = props.params;
  const photos = await fetchPhotosFromAlbumId(props.params.albumId);
  const linkRoot = `/albums/${albumId}`;
  
  return (
    <div>
      <h1>This is the AlbumPage</h1>
      <PhotoList photos={photos} linkRoot={linkRoot} isEditMode={false} />
    </div>
  );
}