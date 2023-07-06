import '../stylesheets/Login.css';

export default function Login() {
  return (
    <>
    <div class="login-container">
  <h2>Login</h2>
  <form>
    <label for="username">Username</label>
    <input type="text" id="username" placeholder="Enter your username" required />

    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Enter your password" required />

    <button type="submit">Login</button>
  </form>
</div>
</>
  );
}