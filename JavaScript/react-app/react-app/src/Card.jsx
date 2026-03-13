import profilePic from './assets/card.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="the alternative text if the image didn't load"></img>
            <h2 className="card-title">Mohammad</h2>
            <p className="card-text">this is a template text that i don't know what to type in so i typed this text to fill in the void</p>

        </div>
    );
}

export default Card

// with jsx, class is a reserved keyword, so we use className
// to put a placeholder image in the src attribute type: https://via.placeholder.com/150 didn't work with me though