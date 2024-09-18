import logo from '../src/logo.svg';
import '../src/App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import schools from './schools';

function App() {
  return (
    <>
      <Header />
      {schools.map((school) => (
        <Content
          key={school.name}
          name={school.name}
          imgURL={school.imgURL}
          desc={school.desc}
          completion={school.completion.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}

        />
      ))}
      <Footer />
    </>
  );
}

export default App;
