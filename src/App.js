import Layout from './hocs/Layout';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Activation from './pages/Activation';
import ResetPassword from './pages/ResetPassword.';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Item from './pages/Item';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout >
        <Routes >
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset' element={<ResetPassword />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
          <Route path='/activate/:uid/:token' element={<Activation />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/cart/' element={<Cart />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

