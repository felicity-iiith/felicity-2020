import React, { Component } from 'react';
//all those CSS stuff, replace with something better from anywhere
const divStyle = {
    margin: '40px'
};
const h2Style = {
    fontSize: '1.8em',
    textAlign: 'left'
};
const col25Style = {
    float: 'left',
    width: '25%'
};
const col75Style = {
    float: 'left',
    width: '75%',
};
const textAreaStyle = {
    width: '75%',
    cols: '80',
    rows: '4'
}
const pStyle = {
    padding: '10px'
}
//alright done

class AdminQuiz extends Component {
    check(e) {
        console.log(e.target);
    }
    state = {
        target_event: {
            name: "Enter event name: ",
            questions: [{
                question_cdn: "",
                answers: ""
            }],
            question_cdn_added: "",
            answers_added: "",
            question_index: 0,
        },
        yetToSelectEvent: true,
        targetName: ""
    }
    events = [
        {
            name: "name1",
            questions: [{
                question_cdn: "question1.png",
                answers: "asdf\nasdf"
            }, {
                question_cdn: "question2.png",
                answers: "asdff\nasdf"
            }]
        },
        {
            name: "name2",
            questions: [{
                question_cdn: "question3.png",
                answers: "asdf\nasdf"
            }]
        },
        {
            name: "name3",
            questions: [{
                question_cdn: "question4.png",
                answers: "asdf\nasdf"
            }]
        },
        {
            name: "name4",
            questions: [{
                question_cdn: "question5.png",
                answers: "asdf\nasdf"
            }]
        },
        {
            name: "name5",
            questions: [{
                question_cdn: "question6.png",
                answers: "asdf\nasdf"
            }]
        }
    ]

    setQuestion = e => this.setState({
        targetEvent: {
            name: this.state.targetEvent.name, questions: this.state.targetEvent.questions,
            question_cdn_added: e.target.value, answers_added: this.state.targetEvent.answers_added,
            question_index: this.state.targetEvent.question_index
        }
    });
    setAnswer = e => this.setState({
        targetEvent: {
            name: this.state.targetEvent.name, questions: this.state.targetEvent.questions,
            question_cdn_added: this.state.targetEvent.question_cdn_added, answers_added: e.target.value,
            question_index: this.state.targetEvent.question_index
        }
    });
    setquestion_index = e => this.setState({
        targetEvent: {
            name: this.state.targetEvent.name, questions: this.state.targetEvent.questions,
            question_cdn_added: this.state.targetEvent.question_cdn_added, answers_added: this.state.targetEvent.answers_added,
            question_index: e.target.value
        }
    });

    render() {
        const self = this;
        function setTarget(e) {
            self.state.targetName = e.target.value.trim();
            // console.log(self.state.targetName);
        }
        function setTargetEvent(e) {
            let found = false;
            self.events.forEach(event => {
                if (event.name.trim() === self.state.targetName) {
                    self.state.targetEvent = event;
                    found = true;
                }
            });
            if (!found) {
                alert("Enter a valid event name");
                self.setState({ yetToSelectEvent: true });
            } else {
                // console.log("S")
                self.setState({ yetToSelectEvent: false });
            }
        }
        function makeChanges(e) {
            // console.log("CALLED MAKECHANGES\n");
            for (let i = 0; i < self.events.length; i++) {
                if (self.events[i].name.trim() === self.state.targetName) {
                    // console.log(self.events[i]);
                    self.events[i] = self.state.targetEvent;
                    alert("Successfully changed!!\n");
                    return;
                }
            }
            alert("value not changed, reload page and try again");
        }
        function addTargetEvent(e) {
            let found = false;
            self.events.forEach(event => {
                if (event.name.trim() === self.state.targetName) {
                    self.state.targetEvent = event;
                    found = true;
                }
            });
            if (found) {
                alert("Event is already added, modify using \"modify select event\"");
            } else {
                // console.log("ADDING EVENT : " + self.state.targetName);
                self.state.targetEvent.name = self.state.targetName;
                self.events.push({ ...self.state.targetEvent });
                alert("Event added successfully, modify it using \"modify select event\"");
            }
        }
        //insert something in the table_body on page landing
        return (
            <div>
                {this.state.yetToSelectEvent && (
                    <div style={divStyle}>
                        Event:  <input type="text" onChange={setTarget}></input> <p></p>
                        <button onClick={setTargetEvent}>modify select event</button>
                        <button onClick={addTargetEvent}>add select event</button>
                    </div>
                )}
                {(!this.state.yetToSelectEvent) && (
                    <div style={divStyle}>
                        <h2 style={h2Style}>Selected event: {this.state.targetEvent.name} </h2>
                        <h2 style={h2Style}>Questions: </h2>
                        <table border="1">
                            <thead>
                                <td>Image cdn (Question)</td><td>Answer</td>      </thead>
                            <tbody id="table_body">
                            </tbody>
                        </table>

                        <br></br>
                        <h2 style={h2Style}>Add Question: </h2>
                        <p style={pStyle}>
                            <div style={col25Style}> Image CDN: </div>
                            <div style={col75Style}>          <textarea type="text" style={textAreaStyle} value={this.state.targetEvent.question_cdn_added} onChange={this.setQuestion}></textarea></div>
                        </p>
                        <p style={pStyle}>
                            <div style={col25Style}> Answer: </div>
                            <div style={col75Style}>   <textarea type="text" style={textAreaStyle} value={this.state.targetEvent.answers_added} onChange={this.setAnswer}></textarea></div>
                        </p>
                        <p style={pStyle}> <button onClick={makeChanges}>ADD </button>  </p>

                        <br></br>
                        <h2 style={h2Style}>Remove Question: </h2>
                        <p style={pStyle}>
                            <div style={col25Style}> Question index to remove: </div>
                            <div style={col75Style}> <input type="number" value={this.state.targetEvent.question_index} onChange={this.setquestion_index}></input></div>
                        </p>
                        <p style={pStyle}> <button onClick={makeChanges}>REMOVE</button>  </p>

                    </div>
                )}
            </div>
        )
    }
}

export default AdminQuiz;