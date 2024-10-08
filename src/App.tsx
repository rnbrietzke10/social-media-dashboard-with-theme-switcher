import './App.css';

import Data from './data.json';
import { Card } from './components/Card';

import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { CardOverview } from './components/CardOverview';
import { Attribution } from './components/Attribution';

/* const getMql = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'); */

function App() {
  if (!Data.socialmedia) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className='App container'>
        <Header />

        <div className='followers'>
          {Data.socialmedia.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                followers={item.followers}
                today={item.today}
                icon={item.icon}
                type={item.type}
                title={item.title}
              />
            );
          })}
        </div>
        <h2> Overview - Today</h2>
        <div className='followers'>
          {Data.overviewToday.map((item, index) => {
            return (
              <CardOverview
                key={index}
                name={item.title}
                followers={item.number}
                today={item.percent}
                icon={item.icon}
                type={item.type}
              />
            );
          })}
        </div>
        <Attribution />
      </div>
    </ThemeProvider>
  );
}

export default App;
