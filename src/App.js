import './App.css';

function Header() {
  return (
    <header className="App-header">
        <h1>Dog Images</h1>
    </header>
  )
}

function Image(props) {
  return (
    <figure>
      <img
        src={props.src}
        alt="cute dog"
      ></img>
    </figure>
  )
}

function Loading() {
  return <p>Loading...</p>;
}

function Main() {
  const urls = ["https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
                "https://images.dog.ceo/breeds/shiba/shiba-9.jpg"]
  if (urls == null) {
    return <Loading />;
  }
  return (
    <main>
      <section>
        <div className="container">
          {urls.map((url) => {
            return (
              <Image src={url} />
            )
          })}
        </div>
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
