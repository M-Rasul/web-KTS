import { connect } from 'react-redux';
import './App.css';
import "./redux/appReducer";
import Preloader from './components/Preloader/Preloader';
import { setInitialized } from './redux/appReducer';
import { refreshToken } from './redux/authReducer';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import ProfileContainer from './components/Profile/ProfileContainer';
import { ContentContainer } from './components/Content/ContentContainer';
import { ChosenContentContainer } from './components/Content/ChosenContent/ChosenContentContainer';
import { LoginContainer } from './components/Login/LoginContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { RegistrationContainer } from './components/Registration/RegistrationContainer';
const App = ({ setInitialized, initialized, role, refreshToken, isAuth, ...props }) => {

  const isModerator = role === "moderator" && true;

  // USE LOCATION
  const location = useLocation();

  // USE NAVIGATE
  const navigate = useNavigate();

  // USE EFFECT
  useEffect(() => {

    // GET ACCESS TOKEN
    const access = localStorage.getItem("access");

    // INITIALIZING AN APP
    setInitialized(access, navigate, location.pathname);
  }, [setInitialized, navigate, location.pathname]);

  useEffect(() => {

    // GET REFRESH TOKEN FROM STORAGE
    const refresh = localStorage.getItem("refresh");

    // SETTING INTERVAL TO REFRESH TOKEN EACH 4 MINUTES
    const intervalId = setInterval(() => {
      refreshToken(refresh);
    }, 4 * 60 * 1000); // 4 minutes in milliseconds

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [refreshToken]);

  // IF APP NOT INITIALIZED
  if (!initialized) return <Preloader />

  // LAYOUT
  return (
    <div>
      <Routes>
        <Route path="/registration" element={<RegistrationContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/profile" element={<ProfileContainer title="My Profile" />} />
                <Route path="/content" element={<ContentContainer title="Content" />} />
                <Route path="/queue" element={<ContentContainer title="Content on queue" isModerator={isModerator} />} />
                <Route path="/content/my" element={<ContentContainer title="My Content" />} />
                <Route path="/content/:id" element={<ChosenContentContainer />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
    role: state.auth.role,
  }
}
export default connect(mapStateToProps, { setInitialized, refreshToken })(App);
