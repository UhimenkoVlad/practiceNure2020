import React from "react";

class SecondPage extends React.Component {


    render() {
        return (
            <div>
                {alert(`Привет ${this.props.name}!`)}
                <h1>Меню</h1>
            </div>
        )
    }
}

export default SecondPage;