import  {useState} from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import NewTable from "./NewTable.jsx";

const SecondApp = () => {
    const [selectedBox, setSelectedBox] = useState(null);

    const handleClick = (boxNumber) => {
        setSelectedBox(boxNumber);
    };

    return (
            <div className="row justify-content-start">
                <div className="col-sm-4 col-md-2 mb-4">
                    <Button style={{height: '90px'}}
                            className={`box ${selectedBox === 1 ? 'selected' : ''}`}
                            onClick={() => handleClick(1)}
                            icon={<HomeOutlined style={{fontSize: '24px'}}/>}
                    >
                        <span className="bold-text">Box 1</span>

                    </Button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <Button style={{height: '90px'}}
                            className={`box ${selectedBox === 2 ? 'selected' : ''}`}
                            onClick={() => handleClick(2)}
                            icon={<HomeOutlined style={{fontSize: '24px'}}/>}
                    >
                        <span className="bold-text">Box 2</span>
                    </Button>
                </div>
                <div className="col-sm-4 col-md-2 mb-4">
                    <Button style={{height: '90px'}}
                            className={`box ${selectedBox === 3 ? 'selected' : ''}`}
                            onClick={() => handleClick(3)}
                            icon={<HomeOutlined style={{fontSize: '24px'}}/>}

                    >
                        <span className="bold-text">Box 3</span>
                    </Button>
                </div>
                <div className=" col-sm-4 col-md-2 mb-4">
                    <Button style={{height: '90px'}}
                            className={`box ${selectedBox === 5 ? 'selected' : ''}`}
                            onClick={() => handleClick(5)}
                            icon={<HomeOutlined style={{fontSize: '24px'}}/>}
                    >
                        <span className="bold-text">Box 4</span>
                    </Button>
                </div>
                <div>
                    <NewTable/>
                </div>
            </div>

    );
};

export default SecondApp;