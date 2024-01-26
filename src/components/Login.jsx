import "./Login.scss";

export default function Login(props) {
  const { onSubmit } = props;
  return (
    <form className={`Login`} action={onSubmit}>
      <h1>Welcome to Galronel</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="Enter your email" id="email" />
      <button>Login</button>
    </form>
  );
}
