import './App.css';
import { useState } from 'react';
import data from './data'
import Tours from './components/Tours';

function App() {

    const [tours , setTours] = useState(data);
     
    function removeTour(id){

        const newTours = tours.filter((tour) => tour.id != id);
        setTours(newTours); 
    }


    function refreshHandler(){
        setTours(data);
    }

    if(tours.length === 0 ){
        return(

            <div className="refresh">
                <h2> No Tours Left </h2>
                <butto className="btn-white" onClick={refreshHandler}> Refresh </butto>
            </div>

        );
    }

  return (

    //top level wrapper 
    <div className="App">

        <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>

  );
}

export default App;
