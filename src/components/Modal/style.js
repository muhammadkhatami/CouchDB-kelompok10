import styled from "styled-components";

export const ConfirmationModalContainer = styled.div`
  .modal-content {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
      0px 10px 20px rgba(0, 0, 0, 0.04);
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    width: 30%;
    align-items: center;
    text-align: center;
    border-radius: 10px;

    h3 {
      font-size: 24px;
      margin-top: 1rem;
    }

    p {
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 24px;
    }
  }
  .modal-layout {
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }
  .display-block {
    display: flex; /* Hidden by default */
  }
  .display-none {
    display: none;
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
  @media screen and (max-width: 992px) {
    .modal-content {
      width: 85%;
    }
  }
`;
