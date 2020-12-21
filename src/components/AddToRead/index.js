import React from 'react';
import { Box, Button, TextInput, Heading } from "grommet";
import { FormAdd } from "grommet-icons";
import questionAPI from '../question/index.js'; 
import QuestionBox from '../question/QuestionBox'; 
import Result from '../question/ResultBox'; 

export class AddToRead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            questionBank: [], 
            score: 0, 
            responses: 0 
        };

        this.changeName.bind(this);
        this.addElement.bind(this);
    }

    changeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    // Function to get question from ./question 
    getQuestions = () => { 
        questionAPI().then(question => { 
        this.setState({questionBank: question}); 
        }); 
    }; 
    
    // Set state back to default and call function 
    playAgain = () => { 
        this.getQuestions(); 
        this.setState({score: 0, responses: 0}); 
    }; 
    
    // Function to compute scores 
    computeAnswer = (answer, correctAns) => { 
        console.log("tai")
        if (answer === correctAns) { 
        this.setState({ 
            score: this.state.score + 1 
        }); 
        } 
        this.setState({ 
        responses: this.state.responses < 5 
            ? this.state.responses + 1 
            : 5 
        }); 
    }; 
 
    // componentDidMount function to get question 
    componentDidMount() { 
        this.getQuestions(); 
    }  

    addElement() {
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        this.props.db.put({
            _id: new Date().toJSON(),
            submit_datetime: datetime,
            read: false,
            item: this.state.name,
            nomor1: this.state.nomor1,
            nomor2: this.state.nomor2,
            nomor3: this.state.nomor3,
        });
    }

    render() {
        return (
            <Box>
                <Box pad="medium" border={{ side: 'top', color: 'light-3' }}>
                    <Heading level="3" margin="none">
                        Mari kita kuis:
                    </Heading>
                </Box>
                <Box direction="row" pad="medium" gap="small">
                    <TextInput onChange={this.changeName.bind(this)} placeholder="Masukan nama kuis ..." value={this.state.name}/>
                    <Button icon={<FormAdd />} onClick={this.addElement.bind(this)} primary type="button" />
                </Box>
                <Box>
                    <div className="container"> 
                        <div className="title"> 
                            QuizOn 
                        </div> 
                    
                        {this.state.questionBank.length > 0 &&  
                        this.state.responses < 5 &&  
                        this.state.questionBank.map(({question, answers, 
                        correct, questionId}) => <QuestionBox question= 
                        {question} options={answers} key={questionId} 
                        selected={answer => this.computeAnswer(answer, correct)}/>)} 
                    
                    </div> 
                </Box>
            </Box>
        );
    }
}

export default AddToRead;