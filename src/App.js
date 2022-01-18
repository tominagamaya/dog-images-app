import './App.css';

function Header() {
  return (
    <header className="App-header">
        <h1>Dog Images</h1>
    </header>
  )
}

function Image() {
  return (
    <figure>
      <img
        src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
        alt="cute dog"
      ></img>
    </figure>
  )
}

function Main() {
  return (
    <main>
      <section>
        <Image />
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Dog images are retrieved from Dog API</p>
      <p>
        <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
