import { connect } from 'react-redux';
import './App.css';
import "./redux/appReducer";
import Preloader from './components/Preloader/Preloader';
import { setInitialized } from './redux/appReducer';
import { useEffect } from 'react';
function App(props) {
  useEffect(() => {
    props.setInitialized();
  }, [props]);
  if(!props.initialized) return <Preloader />
  return (
      <div>
      
      </div>    
  );
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
export default connect(mapStateToProps, {setInitialized})(App);
