const StarMatch = () => {
    const stars = utils.random(1, 9);
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {utils.range(1, stars).map(starId => 
                        <div key={starId} className="star" />
                    )}
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number => 
                        <button key={number} className="number">{number}</button>    
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    )
};

const colours = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue'
};

const utils = {
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
    
}

export default StarMatch;