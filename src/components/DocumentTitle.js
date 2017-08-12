/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

type DocumentTitleProps = {
  title: Object;
  children: any;
  intl: {
    formatMessage: Function;
  };
};

class DocumentTitle extends Component {
  static propTypes = {
    title: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
  };

  componentWillMount(): void {
    this.updateDocumentTitle(this.props);
  }

  componentWillUpdate(newProps: DocumentTitleProps): void {
    this.updateDocumentTitle(newProps);
  }

  props: DocumentTitleProps;

  updateDocumentTitle(props: DocumentTitleProps): void {
    document.title = props.intl.formatMessage(props.title);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default injectIntl(DocumentTitle);
