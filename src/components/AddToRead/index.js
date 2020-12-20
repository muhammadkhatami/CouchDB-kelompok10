import React from 'react';
import { Box, Button, TextInput, Heading } from "grommet";
import { FormAdd } from "grommet-icons";

export class AddToRead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };

        this.changeName.bind(this);
        this.addElement.bind(this);
    }

    changeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    addElement() {
        this.props.db.put({
            _id: new Date().toJSON(),
            read: false,
            item: this.state.name,
        });
    }

    render() {
        return (
            <Box>
                <Box pad="medium" border={{ side: 'top', color: 'light-3' }}>
                    <Heading level="3" margin="none">
                        Add a new item
                    </Heading>
                </Box>
                <Box direction="row" pad="medium" gap="small">
                    <TextInput onChange={this.changeName.bind(this)} placeholder="Enter your new item here" value={this.state.name}/>
                    <Button icon={<FormAdd />} onClick={this.addElement.bind(this)} primary type="button" />
                </Box>
            </Box>
        );
    }
}

export default AddToRead;