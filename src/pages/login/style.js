import { styled } from "styled-components";

const Wrapper = styled.main`
background-color: #5CDB95;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

form{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    color: #05386B;
    width: 93%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;
    box-shadow: 11px 11px 48px -7px rgba(0,0,0,0.36);
    -webkit-box-shadow: 11px 11px 48px -7px rgba(0,0,0,0.36);
    -moz-box-shadow: 11px 11px 48px -7px rgba(0,0,0,0.36);

    h1{
        font-size: 27px;
        .heading{
            color: #5CDB95;
        }
    }

    hr{
        height: 0.5px;
        border: none;
        background-color: #05386B;
    }

    label{
        input{
            width: 100%;
            height: 40px;
            padding-left: 10px;
            border-radius: 5px;
            border: 1px solid #05386B;

            &:focus{
                outline: none;
                border:1px solid #05386B;
                box-shadow: 0 0 2px #05386B;
            }
        }
    }

    span{
        text-align: center;

        a{
            text-decoration: none;
            color: #5CDB95;
            font-weight: bold;
        }
    }
}
`
export default Wrapper