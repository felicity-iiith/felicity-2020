import React, {Component} from 'react';

class AdminQuiz extends Component {
    check(e){
        console.log(e.target);
    }
    state = {
        target_event : [
            {
                question_cdn : "",
                answers : ""
            }
        ]
    }
    events = [
        [
            {
                question_cdn : "question1.png",
                answers : "asdf\nasdf"
            }
        ],
        [
            {
                question_cdn : "question2.png",
                answers : "asdf\nasdf"
            }
        ],
        [
            {
                question_cdn : "question3.png",
                answers : "asdf\nasdf"
            }
        ],
        [
            {
                question_cdn : "question4.png",
                answers : "asdf\nasdf"
            }
        ]
    ]

    // make copy of entire struct, ref: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react

    render(){
        const self=this;
        return(
            <div>
                <h1> QUIZ ADMIN PAGE </h1>
            </div>
        )
    }
}

export default AdminQuiz;