import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="/" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <div className="entry">
        <div className="post">
          <div className="image">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/07/x-logo-beheads-twitter-logo.jpg?w=1390&crop=1"
              alt=""
            />
          </div>
          <div className="texts">
            <h2>Full house battery backup coming later this year</h2>
            <p>
              Hwang was surprised that the company hadn’t reached out to him
              about the @x account he owned and had set to private, given the
              corporate rebranding, but said he would be open to a discussion
              with the company if they wanted the handle for themselves.
            </p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img
              src="https://techcrunch.com/wp-content/uploads/2023/07/x-logo-beheads-twitter-logo.jpg?w=1390&crop=1"
              alt=""
            />
          </div>
          <div className="texts">
            <h2>Full house battery backup coming later this year</h2>
            <p>
              Hwang was surprised that the company hadn’t reached out to him
              about the @x account he owned and had set to private, given the
              corporate rebranding, but said he would be open to a discussion
              with the company if they wanted the handle for themselves.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
