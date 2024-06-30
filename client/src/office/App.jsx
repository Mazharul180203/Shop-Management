import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/CSS/index.css';
import SecondApp from "../src/secondApp.jsx";

const App = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleClick = (boxNumber) => {
        setSelectedBox(boxNumber);
    };

    return (
        <div className="container-fluid">
            <h3 className="text-center">My Name is Saurav</h3>
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 1 ? 'selected' : ''}`}
                        onClick={() => handleClick(1)}
                    >
                        Box 1
                    </button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        Box 2
                    </button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 3 ? 'selected' : ''}`}
                        onClick={() => handleClick(3)}

                    >
                        Box 3
                    </button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 4 ? 'selected' : ''}`}
                        onClick={() => handleClick(4)}
                    >
                        Box 4
                    </button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 5 ? 'selected' : ''}`}
                        onClick={() => handleClick(5)}
                    >
                        Box 5
                    </button>
                </div>
            </div>
            <SecondApp/>
        </div>
    );
};

export default App;
