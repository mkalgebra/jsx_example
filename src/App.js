import './App.css';

function App() {
  const dog = 'Pesek';

  const cat = {
    name: 'Silvestar',
    color: 'White',
    age: '2'
  }

  function kittySaysHi(maca){
    return `Ime moje mace je ${maca.name}. Ona je ${maca.color}. Ima ${cat.age} godina.`
  }

  const food = ['pizza', 'burger', 'lasagne']

  const shoot = 2

  function goal(sh){
    // if(sh%2===0){
    //   return 'Gooooooool'
    // }else{
    //   return 'Stativa'
    // }
    return sh%2===0 ? 'Goooool' : 'Stativa'
  }


  return (
    <div className="App">
      <h1>Svasta nesta</h1>
      <span>Vau vau: {dog}</span>
      <p>Ime moje mace je {cat.name}. Ona je {cat.color} boje. Ima {cat.age} godina.</p>
      <p>{kittySaysHi(cat)}</p>
      <p>Moja omiljena hrana je: {food.join(',')}</p>
      <p>Iiiii prilikaaaaa..... {goal(shoot)}</p>
    </div>
  );
}

export default App;
