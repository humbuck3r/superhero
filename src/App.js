import './App.scss';
import Header from '../src/Components/Header/Header';
import Login from '../src/Components/Login/Login'


const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};




const App = () => {
  return (
    <>
      <Layout>
          <Header />
          <Login />
      </Layout>
    </>
  );
}

export default App;


// token 10226661481390252