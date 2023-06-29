import './App.css';

import Item from './components/Item/Item';




function App() {
  return (
    <div className="App">
      <Item photo="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        city="Athens"
        price="$200 per night"></Item>      
      <Item photo="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg"
        city="New York City"
        price="$500 per night"></Item>
      <Item photo="https://www.bankrate.com/2022/04/14092711/what-is-tangible-personal-property.jpg"
        city="Toronto"
        price="$100 per night"></Item>

<Item photo="https://www.bankrate.com/2022/04/14092711/what-is-tangible-personal-property.jpg"
        city="Toronto"
        price="$100 per night"></Item>
    </div>
  );
}


export default App;
