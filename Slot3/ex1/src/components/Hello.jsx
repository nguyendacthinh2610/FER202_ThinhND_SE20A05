import './MYCSS.css';
function Hello(){
    /*
    const helloStyle = {
        fontSize: '48px',
        color: 'black',
        fontWeight: 'normal',
    };
    const reactStyle = {
        fontSize: '48px',
        color: 'blue',
        fontWeight: 'bold'
    };
    */
    return (
        <div>
            {/*
            Sử dụng trục tiếp giá trị style trong JSX
            */}
            <p className="hello">Hello <span className="react">React</span></p>
        </div>
    );
}

export default Hello;