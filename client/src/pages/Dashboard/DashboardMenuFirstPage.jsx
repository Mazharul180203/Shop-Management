import React, {useState} from 'react';


const DashboardMenuFirstPage = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleClick = (boxNumber) => {
        setSelectedBox(boxNumber);
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-start mt-4" style={{marginRight: '100px'}}>
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        Purchase Menu
                    </button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        Supply Payment
                    </button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleClick(2)}

                    >
                        Stock Menu
                    </button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 4 ? 'selected' : ''}`}
                        onClick={() => handleClick(4)}
                    >
                        Sales Menu
                    </button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 5 ? 'selected' : ''}`}
                        onClick={() => handleClick(5)}
                    >
                        Customer Collection
                    </button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 5 ? 'selected' : ''}`}
                        onClick={() => handleClick(5)}
                    >
                        Expenditure
                    </button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 5 ? 'selected' : ''}`}
                        onClick={() => handleClick(5)}
                    >
                        Daily Sheet
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DashboardMenuFirstPage;