import "./PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoForm from "./PhotoForm";

export default function PhotoList(props) {
  const { photos, linkRoot, isEditMode, coverId } = props;
  console.log(photos);

  let parsedItems;

  if (!isEditMode) {
    parsedItems = photos.map((img) => (
      <a key={img.id} href={`${linkRoot}/view/${img.id}`}>
        <PhotoListItem {...img} />
      </a>
    ));
  }

  if (isEditMode) {
    parsedItems = photos.map((img) => (
      <PhotoForm key={img.id} {...img} coverId={coverId} />
    ));
  }

  return (
    <section className="PhotoList">
      <div>{parsedItems}</div>
    </section>
  );
}
