import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid #0042a4;
  border-radius: 50%;
  border-top: 5px solid #3775cf;

  border-right: 5px solid transparent;
  border-bottom: 5px solid #96bff9;
  border-left: 5px solid transparent;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
