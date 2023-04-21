import './App.css';

function App() {
  const arr = []

  for (let i = 1; i < 49; i++) {
    arr.push("./img" + i + ".png")
  }

  return (
    <div className="App">

      <img src={"./img00.png"} alt={"дичь"} width="100%" />
      <img src={"./img0.png"} alt={"дичь"} width="100%" />

      <div className="card">
        {arr.map((item, key) => <img src={item} id={key} alt={"дичь" + item} width="100%" />)}
      </div>

    </div>
  );
}

export default App;

/*
  <img src="./img00.png" alt="logo" />
        <img src="./img0.png" alt="title" />
        */