import './App.css';

function App() {
  return (
    <div className="App">

      <section className='profile-section'>

        <img src='../public/images/profile__img(1).png/' alt='profilePhoto' id='profile__img'></img>

        <img src='../public/images/_Avatar share button (1).png' alt='share' id='avatar'></img>

        <p id='twitter'>Dannystar007</p>

        <p id='slack'>Dannystarr007</p>

      </section>

      <section className='link-section'>

      <a id='btn__zuri' href="https://twitter.com/DannyStar007"> <button className='btns'>Twitter Link</button> </a>

      <a id='btn__zuri' href="https://training.zuri.team/"> <button className='btns'>Zuri Team</button> </a>

      <a id='books' href="http://books.zuri.team"> <button className='btns'>Zuri Books</button> </a>

      <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=<Dannystarr007>, "> <button className='btns'>Python Books</button> </a>

      <a id='pitch' href="https://background.zuri.team"> <button className='btns'>Background check for coders</button> </a>

      <a id='book__design' href="https://books.zuri.team/design-rules"> <button className='btns'>Design Books</button> </a>

      </section>

      <section className='social-media'>

        <img src='../public/images/slack.png/' alt='slack' id='slack-icon'></img>

        <img src='../public/images/social icon.png/' alt='github'></img>

      </section>

      <section className='footer'>

        <img src='../public/images/Zuri.internship_Logo.png' alt='Zuri logo' className='sponsors'>

        </img>

        <p className='footer-text'>HNG internship 9 frontend task</p>

        <img src='../public/images/I4G.png/' alt='I4g logo' className='sponsors'>

        </img>

      </section>
    </div>
  );
}

export default App;
