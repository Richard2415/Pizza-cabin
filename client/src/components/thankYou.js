import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <i className="fas fa-pizza-slice thank-you-pizza"></i>
          <p className="thanks-subtext">
            Your table has been reserved. Hope you will enjoy it.
          </p>
        </Col>
      </Row>
    </div>
  );
};
