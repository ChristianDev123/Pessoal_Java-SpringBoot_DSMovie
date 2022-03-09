// import {ReactComponent as GithubIcon} from '../../assets/img/github.svg'; // dessa forma de importação a imagem será chamada como uma tag;
import {ReactComponent as GithubIcon} from 'assets/img/github.svg'; // pondo o atalho no tsconfig.json;
import './navbar_styles.css';

export default function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/ChrisDev123</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}