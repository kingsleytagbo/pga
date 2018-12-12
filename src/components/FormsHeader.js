import React from "react";
const EDIT_MODES =
{
    NONE: "None",
    EDIT: "Editing",
    DELETE: "Deleting",
    ADD: "Adding"
};

export default class FormsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: props.editMode };
    }

    componentWillReceiveProps = (props) => {
        if (props.editMode) {
            this.setState({ editMode: props.editMode });
        }
    };

    render() {
        if (this.state.editMode === EDIT_MODES.NONE) {
            return (
                <h3 className="text-center">
                    All Players
                </h3>
            )
        }
        else if (this.state.editMode === EDIT_MODES.DELETE) {
            return (
                <h3 className="text-center">
                    Confirm Player Delete?
                </h3>
            )
        }
        else if (this.state.editMode === EDIT_MODES.ADD) {
            return (
                <h3 className="text-center">
                    Add New Player
                </h3>
            )
        }
        else if (this.state.editMode === EDIT_MODES.EDIT) {
            return (
                <h3 className="text-center">
                    Edit Player
                </h3>
            )
        }
        else {
            return (
                <h3 className="text-center">
                    Change Player
                </h3>
            )
        }
    }
}