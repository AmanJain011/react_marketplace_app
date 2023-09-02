import {styled} from 'styled-components'

const Wrapper  = styled.main`
border: 1px solid black;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
background-color: #5CDB95;

form{
    border: 1px solid #05386B;
    width: 93%;
    max-width: 450px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #05386B;
    box-shadow: 10px 10px 35px -10px rgba(0,0,0,0.64);
    -webkit-box-shadow: 10px 10px 35px -10px rgba(0,0,0,0.64);
    -moz-box-shadow: 10px 10px 35px -10px rgba(0,0,0,0.64);

    .heading{
        span{
            color: #5CDB95;
        }
    }

    hr{
        height: 1px;
        background-color: #05386B;
        border: none;
    }

    label{
        input{
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid black;
            font-size: 1rem;

            &::placeholder{
                color: #8EE4AF;
            }

            &:focus{
                outline: none;
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