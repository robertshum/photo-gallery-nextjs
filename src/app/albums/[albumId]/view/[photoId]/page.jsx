import PhotoView from '@/components/PhotoView';
import { fetchAlbumPhotosById } from '@/actions/albumActions';

export default async function PhotoViewer(props) {

  const { albumId, photoId } = props.params;

  const photos = await fetchAlbumPhotosById(albumId);
  const currentIndex = photos.findIndex((photo) => photo.id === Number(photoId));

  return (
    <div className="PhotoPage">
      <PhotoView
        albumId={albumId}
        photoId={photoId}
        photos={photos}
        currentIndex={currentIndex}
      />
    </div>
  );
}