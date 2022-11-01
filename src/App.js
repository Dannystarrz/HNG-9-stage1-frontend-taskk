import './App.css';

function App() {
  return (
    <div className="App">

      <section className='profile-section'>

        <img src='' alt='' id='profile__img'></img>

        <p id='twitter'>Dannystar007</p>

        <p id='slack'>Dannystarr007</p>

      </section>

      <section className='link-section'>

      <a id='btn__zuri' href="https://twitter.com/DannyStar007"> <button>Twitter Link</button> </a>

      <a id='btn__zuri' href="https://training.zuri.team/"> <button>Zuri Team</button> </a>

      <a id='books' href="http://books.zuri.team"> <button>Zuri Books</button> </a>

      <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=<Dannystarr007>, "> <button>Python Books</button> </a>

      <a id='pitch' href="https://background.zuri.team"> <button>Background check for coders</button> </a>

      <a id='book__design' href="https://books.zuri.team/design-rules"> <button>Design Books</button> </a>

      </section>

      <section className='social-media'>

      </section>

      <section className='footer'>

        <img src='../public/images/Zuri.internship_Logo.png' alt='Zuri logo'>

        </img>

        <p>HNG internship 9 frontend task</p>

        <img src='../public/images/I4G.png/' alt='I4g logo'>

        </img>

      </section>
    </div>
  );
}

export default App;
