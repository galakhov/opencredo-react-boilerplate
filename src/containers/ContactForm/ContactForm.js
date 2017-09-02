/* @flow */
import React, { PropTypes, Element } from 'react';
import { Button, Input } from 'react-bootstrap'; // Row, Col
import { FormattedMessage, FormattedHTMLMessage, intlShape, injectIntl } from 'react-intl';
import { generateValidation } from 'redux-form-validation';
import TextInput from 'components/FormFields/TextInput';
// import HorizontalRadioGroup from 'components/FormFields/HorizontalRadioGroup';
// import DropDown from 'components/FormFields/DropDown';
import ReactDOM from 'react-dom';
import FormErrorMessages from 'components/FormFields/FormErrorMessages';
import validations from './ContactForm.validations';
import { reduxForm } from 'redux-form';
import { messages } from './ContactForm.i18n';
import styles from './ContactForm.scss';
import { autobind } from 'core-decorators';
import axios from 'axios';
import qs from 'qs';
import debug from 'debug';

if (__DEBUG__) {
  debug.enable('contact-form:*');
}

const log = debug('contact-form:info');

class ContactForm extends React.Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    values: PropTypes.object.isRequired,
    pristine: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    // user: PropTypes.object.isRequired,
    // handleUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      data: {},
    };
    // ES5:
    // this.toggleState = this.toggleState.bind(this);
  }

  componentDidUpdate() {
    /* const hash = this.state.location.hash.replace('#', '');
    if (hash) {
      const node = ReactDOM.findDOMNode(this.refs[hash]);
      if (node) {
        node.scrollIntoView();
      }
    }*/
  }

  @autobind
  onUpdateClick(e) {
    e.preventDefault();
    // this.props.handleUpdate(Object.assign({}, this.props.user, this.props.values));
    if (this.props.fields.notes.value.length < 2) {
      log('Ihre Nachricht enthält viel zu wenige Zeichen.');
      // return false;
    } else {
      log('Fields collected on onUpdateClick:', this.props.fields);

      // save
      this.setState({
        data: this.props.fields,
      });

      const resultElement = document.getElementById('resultElement');
      resultElement.innerHTML = '';

      const instance = axios.create({
        baseURL: 'http://gura.4dd-communication.com',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      // JSON.stringify(var)
      // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      instance.defaults.timeout = 1500;

      instance.post('/contact.php', qs.stringify({
        userName: this.props.fields.givenName.value,
        userSurname: this.props.fields.familyName.value,
        userMail: this.props.fields.email.value,
        userMsg: this.props.fields.notes.value,
      }))
      .then((response) => {
        resultElement.innerHTML = this.generateSuccessHTMLOutput(response);
      })
      .catch((error) => {
        resultElement.innerHTML = this.generateErrorHTMLOutput(error);
        // this.generateErrorHTMLOutput(error);
      });

      this.props.resetForm();

      // add hash:
      // this.state.location.hash.add('home');
      const node = ReactDOM.findDOMNode(this.refs.result);
      if (node) {
        node.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }

  @autobind
  onResetClick() {
    this.props.resetForm();
  }

  generateSuccessHTMLOutput(response) {
    /*
    <h5>Status:</h5><pre>${response.status} ${response.statusText}</pre><h5>Headers:</h5><pre>${JSON.stringify(response.headers, null, '\t')}</pre><h5>Data:</h5>
    */
    return (`<h4>Ergebnis:</h4><pre>${response.data}</pre>`);
    // JSON.stringify(response.data, null, '\t')
  }
  generateErrorHTMLOutput(error) {
    return (`<h4>Result</h4><h5>Message:</h5><pre>${error.message}</pre><h5>Status:</h5><pre>${error.response.status} ${error.response.statusText}</pre><h5>Headers:</h5><pre>${JSON.stringify(error.response.headers, null, '\t')}</pre><h5>Data:</h5><pre>${JSON.stringify(error.response.data, null, '\t')}</pre>`);
  }

  isUpdateButtonDisabled(): boolean {
    return this.props.pristine || this.props.invalid;
  }

  isResetButtonDisabled(): boolean {
    return this.props.pristine;
  }

  // ES5
  @autobind
  toggleState() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  // need to use this.bind in constructor additionally if no 'autobind' was set

  // ES6+
  /* toggleState = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  } */

  /*
  nickname,
  age,
  gender,
  locale,
  */

  render(): Element {
    const {
      fields: {
        givenName,
        familyName,
        email,
        emailVerified,
        notes,
      },
    } = this.props;
    const { formatMessage } = this.props.intl;

    // const MALE: string = 'männlich';
    // const FEMALE: string = 'weiblich';
    /* const genderValues = [
      {
        label: formatMessage(messages.gender.male.label),
        value: MALE,
      },
      {
        label: formatMessage(messages.gender.female.label),
        value: FEMALE,
      },
    ]; */

    // in a real app, the locales would be populated via service call:
    // const locales: string[] = ['en-GB', 'en-AU', 'es-ES', 'es-CR', 'es-NI'];

/*
<Col sm={2}>
  <img className={styles.picture} src={this.props.user.picture} />
</Col>
*/

    return (
      <div className={styles.container}>
        <form onSubmit={this.onUpdateClick}>
          <TextInput field={givenName} placeholder={formatMessage(messages.givenName.placeholder)}>
            <FormErrorMessages field={givenName} minLength={validations.givenName.minLength} />
          </TextInput>
          <TextInput field={familyName} placeholder={formatMessage(messages.familyName.placeholder)}>
            <FormErrorMessages field={familyName} minLength={validations.familyName.minLength} />
          </TextInput>
          {
            /*
            <TextInput field={nickname} placeholder={formatMessage(messages.nickname.placeholder)}>
              <FormErrorMessages field={nickname} maxLength={validations.nickname.maxLength} />
            </TextInput>
            */
          }
          <TextInput field={email} type="email" placeholder={formatMessage(messages.email.placeholder)}>
            <FormErrorMessages field={email} />
          </TextInput>
          <Input type="checkbox" onClick={this.toggleState} label={formatMessage(messages.emailVerified.label)} {...emailVerified} />
          {
            /*
            <Row>
              <Col sm={3}>
                  <TextInput field={age} type="number" placeholder={formatMessage(messages.age.placeholder)}>
                    <FormErrorMessages field={age} min={validations.age.min} max={validations.age.max} />
                  </TextInput>

              </Col>
              <Col sm={9}>
                <HorizontalRadioGroup field={gender} values={genderValues} />
              </Col>
            </Row>
            <DropDown label={formatMessage(messages.locale.label)} field={locale} values={locales} />
            */
          }
          <Input type="textarea" minLength={validations.notes.minLength} placeholder={formatMessage(messages.notes.placeholder)} label={formatMessage(messages.notes.label)} {...notes} />

          <FormErrorMessages field={notes} minLength={validations.notes.minLength} />

          <Button
            bsStyle="primary"
            onClick={this.onUpdateClick}
            disabled={ this.state.disabled ? true : this.isUpdateButtonDisabled() }
          >
            <FormattedMessage {...messages.save.label} />
          </Button>&nbsp;
          {
            /*
            Need to include the preceding non-breaking space, because when React renders the HTML, there is no gap in the markup between the buttons - which results in the buttons being flush up against each other.
            */
          }
          <Button
            bsStyle="default"
            onClick={this.onResetClick}
            disabled={this.isResetButtonDisabled()}
          >
            <FormattedMessage {...messages.reset.label} />
          </Button>
        </form>
        <div ref="result"><br /></div>
        <div id="resultElement"></div>
        <br />
        <div className="sliding_box">
          <FormattedHTMLMessage {...messages.disclaimer} />
				</div>
      </div>
    );
  }
}

const reduxFormConfig: Object = {
  form: 'contactForm',
  ...generateValidation(validations),
};

const mapStateToProps = (state, props) => ({ initialValues: props.user });

export default reduxForm(reduxFormConfig, mapStateToProps)(injectIntl(ContactForm));
