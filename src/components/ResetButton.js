import React from 'react'

class ResetButton extends React.Component {

    render() {

        return (
            <div className="component">
                <button onClick={this.props.reset}> Reset </button>
            </div>
        )
    }
}
export default ResetButton