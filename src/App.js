import './App.css';

function App() {
  const arr = []
  arr.push("./img00.png")

  for (let i = 0; i < 49; i++) {
    arr.push("./img" + i + ".png")
  }

  return (
    <div className="App">


      <div className="card">
        {arr.map((item, key) => <img src={item} id={key} alt={"дичь" + item} />)}
      </div>

    </div>
  );
}

export default App;

/*
  <img src="./img00.png" alt="logo" />
        <img src="./img0.png" alt="title" />
        */