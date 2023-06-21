import styled from "styled-components";

export const ToggleButton = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 20px;
  border: ${props => `1px solid ${props.theme.textColor}`};
  background: ${props => `${props.theme.bgColor}`};
  cursor: pointer;
  transition: all ${props => `${props.transition}ms`} ease;
  margin-left: 33%;

  &::before{
    content: "Modo oscuro:";
    display: inline-flex;
    color: ${props => `${props.theme.textColor}`};
    position: absolute;
    left: -114px;
    align-items: center;
    top: 2px;
  }

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 999;
  }

  span {
    position: absolute;
    top: 1px;
    left: ${props => (props.checked ? "16px" : "2px")};
    background: ${props => `${props.theme.textColor}`};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all ${props => `${props.transition}ms`} ease;
  }

    @media screen and (max-width: 770px) {
        position: fixed;
        bottom: 13px;
        top: auto;
        z-index: 10;
        left: 0px;
        margin-left: 15px;

        &::before{
            content: "";
        }
    }
`;

export const Button = styled.button`
    color: ${props => `${props.theme.bgColor}`};
    background: ${props => `${props.theme.textColor}`};
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    border-radius: 50px;
    text-align: center;
    padding: 0.5rem 1rem;
    border: 0px;
    text-transform: capitalize;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }

    &.large{
        width: 100%;
        padding: 1rem 0px;
    }

    &.black{
        background: #222;
        color: #fff;
    }
`;


export const BackButton = styled.button`
    color: #222;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    border-radius: 50px;
    text-align: center;
    padding: 0.5rem 1rem;
    border: 0px;
    text-transform: capitalize;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
`;

export const AlertSuccess = styled.span`
    font-size: 30px;
    color: green;
    display: flex;
    justify-content: center;
    padding: 1rem 0px;
`;

export const FormContainer = styled.div`
    width: 95%;
    display: flex;
    flex-flow: column;
    padding: 3rem 0px;
    gap: 3rem;
    margin: 0px auto;
    

    form{
        margin: 0px auto;
        max-width: 100%;
    }

    .head-form{
        display: inline-flex;
        justify-content: center;

        h4{
            font-size: 20px;
            font-weight: bold;
        }
    }
    .fields{
        display: flex;
        padding: 2rem 0px;
        gap: 20px;
        flex-wrap: wrap;
    }
    .actions{
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-flow: column;
    gap: 8px;
`;

export const Field = styled.input`
    padding: 10px 10px;
    border: 0.5px solid #000;
    border-radius: 5px;
    font-size: 15px;

    &[type=number]{
        max-width: 70px;
    }
`;