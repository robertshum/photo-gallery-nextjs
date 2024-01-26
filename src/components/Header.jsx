import "./Header.scss";

export default function Header(props) {
  const { user } = props;

  return (
    <header className="UserHeader">
      <div>
        <h1>
          <a href="/">Galronel</a>
        </h1>
        <h2>A photo sharing project</h2>
        <nav>
          <li>
            <a href="/photos">Photos</a>
          </li>
          <li>
            <a href="/albums">Albums</a>
          </li>
          <li>
            <a href="/albums/new">New</a>
          </li>
          {user && <li>{user.username}</li>}
        </nav>
      </div>
    </header>
  );
}
