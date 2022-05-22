import './App.scss';
import AnimatedTitle from './components/AnimatedTitle';
import useMultipleTypeWriter from './hooks/useMultipleTypeWriter';


function App() {
  const typing = useMultipleTypeWriter(["Programmer", "Webdev", "Apps", "Java", "C#", "PHP", "JS", "TS", "React          Native", "Kotlin", "SQL", "MongoDB", "WuttiFrutti"])



  return (
    <div className="App">

      <div className='img-background'>
        <div className='heading-border'>
          <header className="App-header">
            {/* <Heading>{other}</Heading> */}
            <AnimatedTitle text={typing} />


          </header>
        </div>

        <div className='heading-border' style={{ marginTop: "15em" }}>
          <div style={{ height: "100vh" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
