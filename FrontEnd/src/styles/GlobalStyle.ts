import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --brand1: #6100AB;
      --brand2: #7D82F1;
      --brand3: #BEC1F8;
      --brand4: #E7E8FC;
      --grey1: #212529;
      --grey2: #495057;
      --grey3: #CED3D7;
      --grey4: #F1F3F5;
      --grey5: #F8F9FA;
      --grey6: #DEE0FB;

      font-size: 60%
    }


    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        width: 100vw;
        height: 100vh;
    }

    body {
        background: var(--brand1);
        color: var(--grey5);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input-security, button, textarea {
        font-family: 'Inter';
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
    `;

