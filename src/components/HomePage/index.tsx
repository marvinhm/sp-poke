import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

function HomePage() {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])
  return (
    <div>
      <div className="container-fluid frontPageGreen text-light p-5">
        <div className="container frontPageGreen p-5">
          <h1 className="display-4 homepage-title">{t('homepage.title')}</h1>
          <hr/>
            <p className='page-text'>{t('homepage.subtitle')}</p>
            <div className='homepage-button'>
              <Link to="/list">
                <Button variant="outline-secondary">{t('homepage.button')}</Button>
              </Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default HomePage;