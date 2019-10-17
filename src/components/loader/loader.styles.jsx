import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .ball {
    width: 22px;
    height: 22px;
    border-radius: 11px;
    margin: 0 10px;

    animation: 2s bounce ease infinite;
  }
  .blue {
    background-color: #4285f5;
  }

  .red {
    background-color: #ea4436;
    animation-delay: 0.25s;
  }

  .yellow {
    background-color: #fbbd06;
    animation-delay: 0.5s;
  }

  .green {
    background-color: #34a952;
    animation-delay: 0.75s;
  }

  @keyframes bounce {
    50% {
      transform: translateY(25px);
    }
  }
`;

const LoaderStyles = { Wrapper };

export default LoaderStyles;
