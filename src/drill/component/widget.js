import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class Widget extends Component {
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

export default Widget;
