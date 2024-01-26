import "./PhotoListItem.scss";

export default function PhotoListItem(props) {
  const { url, title } = props;

  return (
    <article className="PhotoListItem">
      <img src={url} title={title} />
      <h1>{title}</h1>
    </article>
  );
}
