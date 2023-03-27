import * as React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MainNavigation.css';

function MainNavigation() {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey: any) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link>
          <Link to="/">
            <p className='header-text'>{t('navigation.home')}</p>
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/list">
          <p className='header-text'>{t('navigation.list')}</p>
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default MainNavigation