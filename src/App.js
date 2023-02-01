import './App.css';

import { AuthProvider } from 'oidc-react';
import LoggedIn from './LoggedIn';

const oidcConfig = {
  onSignIn: async (user) => {
    alert('You just signed in, congrats! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },
  authority: 'https://login.microsoftonline.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
  clientId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  redirectUri: 'http://localhost:3000/',
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <p>OIDC React</p>
          <LoggedIn />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
