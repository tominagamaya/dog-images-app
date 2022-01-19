import './App.css';
import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="App-header">
        <h1>Dog Images</h1>
    </header>
  )
}

function Image(props) {
  return (
    <figure className="content">
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

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="select-breed">
          <div>
            <div>
              <select name="breed" defaultValue="shiba">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
                <option value="dachshund">Dachshund</option>
                <option value="dalmatian">Dalmatian</option>
                <option value="labrador">Labrador</option>
                <option value="maltese">Maltese</option>
                <option value="poodle/toy">Toy Poodle</option>
                <option value="terrier/yorkshire">Yorkshire Terrier</option>
                <option value="collie/border">Border Collie</option>
              </select>
            </div>
          </div>
          <div>
            <button type="submit">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

function Main() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      setUrls(urls);
    })
  }, [])
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }
  if (urls == null) {
    return <Loading />;
  }
  return (
    <main>
      <section className="image-section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section>
        <div className="container">
          {urls.map((url, index) => {
            return (
              <Image key={index} src={url} />
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
