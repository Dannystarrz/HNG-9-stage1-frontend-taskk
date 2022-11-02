import './App.css';
import profileimage from './img/profile__img (1).png';
import slckicon from './img/slack.png';
import ghub from './img/Social icon.png';
import zlogo from './img/Zuri.Internship_Logo.png';
import iforg from './img/I4G.png';

function App() {
  return (
    <div className="App">

      <section className='profile-section'>

        <img src={profileimage} alt='profilePhoto' id='profile__img'></img>

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

        <img src={slckicon} alt='slack' id='slack-icon'></img>

        <img src={ghub} alt='github'></img>

      </section>

      <section className='footer'>

        <img src={zlogo} alt='Zuri logo' className='sponsors'>

        </img>

        <p className='footer-text'>HNG internship 9 frontend task</p>

        <img src={iforg} alt='I4g logo' className='sponsors'>

        </img>

      </section>
    </div>
  );
}

export default App;
