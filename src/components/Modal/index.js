import React from "react";

import { ConfirmationModalContainer } from "./style";
import { Button } from "grommet";

class ConfirmationModal extends React.Component {
  render() {
    const { message, title, show, handleClose, handleSubmit } = this.props;
    const showModal = show
      ? "modal-layout display-block"
      : "modal-layout display-none";

    return (
      <ConfirmationModalContainer>
        <div className={showModal}>
          <div className="modal-content">
            <h3>{title}</h3>
            <p>{message}</p>
            <div className="buttons">
              <Button
                label="Start Now"
                primary
                style={{ marginRight: "1rem" }}
                onClick={handleSubmit}
              />
              <Button label="Cancel" secondary onClick={handleClose} />
            </div>
          </div>
        </div>
      </ConfirmationModalContainer>
    );
  }
}

export default ConfirmationModal;
