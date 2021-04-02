import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Progress } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  smallText: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  variant: PropTypes.string,
};

const defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: '',
};

class Widget01 extends Component {
  render() {
    const { header, mainText} = this.props;


    return (
      <Card color="primary">
        <CardBody>
            <div>{mainText}</div>
          <div className="h4 m-0 text-center">{header}</div>
        </CardBody>
      </Card>
    );
  }
}

Widget01.propTypes = propTypes;
Widget01.defaultProps = defaultProps;

export default Widget01;
