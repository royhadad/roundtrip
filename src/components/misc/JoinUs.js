import React from 'react';
import signupUser from '../../utils/signupUser';
import validator from 'validator';
import miscResources from '../../resources/components/misc.json';
const resources = miscResources.JoinUs;

class JoinUs extends React.Component {
    state = {}
    constructor(props) {
        super(props);
        this.user_name_ref = React.createRef();
        this.user_email_ref = React.createRef();
    }

    componentDidMount() {
        this.setState(() => ({ error: undefined }))
    }

    onSubmit = (e) => {
        e.stopPropagation();
        const name = this.user_name_ref.current.value;
        const email = this.user_email_ref.current.value;
        if (!validator.isEmail(email)) {
            this.setState(() => ({ error: resources.emailError }));
        } else if (validator.isEmpty(name)) {
            this.setState(() => ({ error: resources.nameError }));
        } else {
            this.setState(() => ({ error: resources.successText }));
            signupUser(name, email);
        }
    }

    render() {
        return (
            <div className='join-us-container'>
                <div className='join-us-inner-container'>
                    <div className='join-us-header'>
                        {resources.header}
                    </div>
                    <div className='form-container'>
                        <input type='text' placeholder={resources.namePlaceholder} ref={this.user_name_ref} />
                        <input type='text' placeholder={resources.emailPlaceholder} ref={this.user_email_ref} />
                        <button className='signup-button' onClick={this.onSubmit}>
                            {resources.signupButtonText}
                        </button>
                    </div>
                    <div className='join-us-error' style={this.state.error === resources.successText ? { color: 'green' } : {}}>
                        {this.state.error}
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinUs;