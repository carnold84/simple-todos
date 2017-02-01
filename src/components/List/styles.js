import styled from 'styled-components';

export const Container = styled.section`
    width: 90%;
    max-width: 800px;
    flex-direction: column;
    display: flex;
`;

export const FormContainer = styled.section`
    position: relative;
    padding: 20px 0;
    display: flex;

    input {
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        padding: 12px 16px;
        border: none;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
        outline: none;
        display: flex;

        &:focus {
            border-color: #cccccc;
        }
    }
`;

export const ListContainer = styled.div`
    padding: 0;
    margin: 0 0 20px;
    list-style: none;
    flex-direction: column;
    display: flex;
`;

export const ListMessage = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    text-align: center;
    color: #999999;
    padding: 12px 16px;
`;