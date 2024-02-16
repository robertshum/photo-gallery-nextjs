import PhotoView from '@/components/PhotoView';
import { fetchAlbumPhotosById } from '@/actions/albumActions';

export default function PhotoViewer(props) {

  const { albumId, photoId } = props.params;

  //TODO get photos from fetchAlbumPhotosById

  return (
    <div>
      <h1>This is the PhotoViewer</h1>
      <p>photo id: {photoId}</p>
      <p>album id: {albumId}</p>
    </div>
  );
}