import React, {useState} from 'react';

const AddNewCategoryPage = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleClick = (boxNumber) => {
        setSelectedBox(boxNumber);
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-start mt-4">
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        Add New
                    </button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <button
                        className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                        onClick={() => handleClick(2)}
                    >
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewCategoryPage;