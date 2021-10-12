import { useTranslation } from 'react-i18next';

import './App.css';

import ClassTranslation from './components/ClassTranslation';
import RederPropsTranslation from './components/RenderPropsTranslation';
import HooksTransalation from './components/HooksTransalation';

function App() {
  const { i18n } = useTranslation();

  const handleLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='App'>
      <div
        style={{
          width: '100%',
          backgroundColor: 'lightseagreen',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        <button onClick={handleLanguage.bind(this, 'en')}>English</button>
        <button onClick={() => handleLanguage('tn')}>Tamil/தமிழ்</button>
        <button onClick={() => handleLanguage('tl')}>Telugu/తెలుగు</button>
        <button onClick={() => handleLanguage('hi')}>Hindi/हिन्दी</button>
        {/* <button onClick={() => handleLanguage('ka')}>Kannada/हिन्दी</button> */}
      </div>
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <HooksTransalation />
        <ClassTranslation />
        <RederPropsTranslation />
      </div>
    </div>
  );
}

export default App;
