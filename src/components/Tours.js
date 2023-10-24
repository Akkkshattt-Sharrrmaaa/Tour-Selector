import Card from "./Card";

function Tours({tours ,removeTour}){

    return(
 
        <div className="container"> 

            <div>
                <h2 className="title">Plan With Akshat</h2>
            </div>

            {/* making multiple cards with single line */}
            {/* the map function is mapping every element of the array passed in the tours(array) with a <Card> </Card> component. This way for every element of tours , a card will be returned  */}
            <div className="cards">
                {
                    tours.map( (tour)=> {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>

    );


}

export default Tours;