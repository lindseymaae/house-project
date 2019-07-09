import React from "react";
import "./TextInput.css";

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            label: props.label || "Label",
            type: props.type || "text",
            changer: props.changer,
            username: '',
            password: '',
            password2: '',
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            email: '',
            phone: '',
        };
    }

    changeValue(event){
        console.log(event);
        
        const value = event.target.value;
        this.setState({ value, error: "" });
    }

    handleChangeFor = (e) => (event) =>{
        console.log(e);
        console.log(event.target.value);
        
        
        this.setState({
            value: event.target.value,
            [e]: event.target.value
        })
        console.log(this.state);
        
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            this.setState({ value: this.props.predicted });
        }
    }

    render() {
        const { active, value, error, label, type, changer } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
            "active"} ${locked && !active && "locked"}`;

        return (
            <div className={fieldClassName}>
                {active &&
                    value &&
                    predicted &&
                    predicted.includes(value) && <p className="predicted">{predicted}</p>}
                <label htmlFor={label}></label>
                <input
                    id={1}
                    type={type}
                    value={value}
                    placeholder={label}
                    changer={changer}
                    onChange={this.handleChangeFor(changer)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label htmlFor={1} className={error && "error"}>
                    {error || label}
                </label>
            </div>
        );
    }
}

export default Input;