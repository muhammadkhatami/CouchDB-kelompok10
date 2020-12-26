import styled from "styled-components";

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .left-container {
    flex: 0 0 50%;
    display: flex;
    justify-content: center;
  }

  .right-container {
    flex: 0 0 50%;

    h1 {
      margin-block-start: 0;
      margin-block-end: 0;
      font-weight: 600;
      color: #7d4cdb;
    }

    p {
      font-size: 20px;
      margin-bottom: 2rem;
    }

    .error-msg {
      font-size: 16px;
      color: red;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      width: 70%;
      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
      margin-bottom: 2.5rem;

      hr {
        border-color: rgba(0, 0, 0, 0.1);
        width: calc(100% - 2px);
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-end: 0;
      }

      .form-control {
        position: relative;

        label {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          width: 85%;
          margin-bottom: 0;
          transition: all 0.2s ease-in-out;
          padding: 1.2rem;
          border-left: 4px solid transparent;
          font-size: 16px;
          opacity: 0.5;
          cursor: text;
        }

        input {
          height: 1.5rem;
          outline: none;
          width: 85%;
          padding: 1.2rem;
          border: none;
          border-left: 4px solid transparent;
          transition: 0.3s;

          &:not(:placeholder-shown) {
            padding-top: calc(2.4rem * (2 / 3));
            padding-bottom: calc(1.2rem / 3);
          }

          &:not(:placeholder-shown) ~ label {
            padding-top: calc(1.2rem / 2.5);
            padding-bottom: calc(1.2rem / 2.5);
            font-size: 12px;
            color: rgba(0, 0, 0, 0.8);
          }

          &:focus {
            border-left: 4px solid #7d4cdb;
          }

          &::-webkit-input-placeholder {
            color: transparent;
          }

          &:-ms-input-placeholder {
            color: transparent;
          }

          &::-ms-input-placeholder {
            color: transparent;
          }

          &::-moz-placeholder {
            color: transparent;
          }

          &::placeholder {
            color: transparent;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
  }

  @media screen and (max-width: 992px) {
    height: auto;
    flex-direction: column-reverse;
    padding: 1.5rem 1.5rem 0 1.5rem;

    .left-container {
      margin-top: 3rem;

      img {
        width: 100%;
        height: auto;
      }
    }

    .right-container {
      h1 {
        text-align: center;
      }

      p {
        text-align: center;
      }
      .form-group {
        width: 100%;
      }
    }
  }
`;
