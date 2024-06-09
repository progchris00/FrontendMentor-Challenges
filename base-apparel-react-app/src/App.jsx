import "./App.css";

function App() {
  return (
    <>
      <main>
        <TextSection />
        <ImageSection />
      </main>
    </>
  );
}

function TextSection() {
  return (
    <section className="left-section">
      <img src="/logo.svg" alt="" />
      <div className="text">
        <h1>We're coming soon</h1>
        <p className="description">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals
        </p>
        <input type="text" placeholder="Email Address" />
      </div>
    </section>
  );
}

function ImageSection() {
  return (
    <section className="right-section">
      <img src="/hero-desktop.jpg" alt="" />
    </section>
  );
}

export default App;
