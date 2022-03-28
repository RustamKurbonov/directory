import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import AboutContainer from './components/About/AboutContainer'
import DictionaryContainer from './components/Dictionary/DictionaryContainer'
import MainContainer from './components/Main/MainContainer'
import Login from './components/Login/Login'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

  outLogin = () => {
    localStorage.clear()
    window.location.reload()
 }
 
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className='wrapper'>
            <HeaderContainer outLogin = {this.outLogin} store={this.props.store} />
            <section className='body'>
              <Route exact path='/' render={() => <MainContainer store={this.props.store} />} />
              <Route path='/login' render={() => <Login />} />
              <Route path='/dictionary' render={() => <DictionaryContainer store={this.props.store} />}/>
              <Route path='/about' render={() => <AboutContainer store={this.props.store} />} />
            </section>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
