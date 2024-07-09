import  {useState} from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import NewTable from "./NewTable.jsx";
import EditTable from "./EditApp.jsx";


const initialData = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        role: 'admin',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
        role: 'admin',
    },
];

const columnDefinitions = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
        editable: true,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '10%',
        editable: true,
        sorter: (a, b) => a.age - b.age,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        width: '15%',
        editable: true,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: '35%',
        editable: true,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
];

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
                    <EditTable initialData={initialData} columnDefinitions={columnDefinitions}/>
                </div>
            </div>

    );
};

export default SecondApp;