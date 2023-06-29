import { connect } from 'react-redux';
import './App.css';
import "./redux/appReducer";
import Preloader from './components/Preloader/Preloader';
import { setInitialized } from './redux/appReducer';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router';
import ProfileContainer from './components/Profile/ProfileContainer';
import { ContentContainer } from './components/Content/ContentContainer';
import { ChosenContentContainer } from './components/Content/ChosenContent/ChosenContentContainer';
const App = (props) => {
  useEffect(() => {
    props.setInitialized();
  }, [props]);
  if(!props.initialized) return <Preloader />
  // if(!props.isAuth) return <Login />
  return (
      <div className="main__layout">
        <Header />
        <div className="main__layout_bottom">
          <Sidebar />
          <div className="main__content">
            <Routes>
              <Route path="/profile" element={<ProfileContainer title="My Profile" />} />
              <Route path="/content" element={<ContentContainer title="Content" />} />
              <Route path="/content/:id" element={<ChosenContentContainer />} />
            </Routes>
          </div>
        </div>
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
