import { connect } from 'react-redux';
import './App.css';
import "./redux/appReducer";
import Preloader from './components/Preloader/Preloader';
import { setInitialized } from './redux/appReducer';
import { useEffect } from 'react';
import Header from './components/Header/Header';
function App(props) {
  useEffect(() => {
    props.setInitialized();
  }, [props]);
  if(!props.initialized) return <Preloader />
  // if(!props.isAuth) return <Login />
  return (
      <div className="main__layout">
        <Header />
      </div>    
  );
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {setInitialized})(App);
