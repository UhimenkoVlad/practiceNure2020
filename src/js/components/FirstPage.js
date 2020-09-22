import React from "react";
import SecondPage from "./SecondPage";

class FirstPage extends React.Component {

    state = {
        stage: 1,
        value: ''
    };

    goNextStage = () => {
        this.setState({
            stage: this.state.stage + 1
        });
    };

    handChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const {stage} = this.state;
        const {value} = this.state;
        return (
            stage === 1 ?
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Имя:
                            <input type="text" name="name" value={value} onChange={this.handChange}/>
                        </label>
                        <button onClick={() => this.goNextStage(stage)}>Далее</button>
                    </form>

                </div>
                :
                <div>
                    <SecondPage name={value}/>
                </div>
        )
    }
}

export default FirstPage;