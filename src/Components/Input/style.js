import styled from 'styled-components';

export const StyledInput = styled.div`
 div {
        height: 45px;
        position: relative;
        display: flex;
        align-items: center;
    
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
    
        color: var(--color-text);

        border-radius: 50px;
    
        :focus-within {
            border-color: #6663FF;

        } 
        
        input {
            width: 100%;
            height: 100%;
            background: none;
    
            border: none;
    
            color: var(--color-primary);
            border-radius: 50px;
            border: 5px solid #757575;
            padding-left: 5px;

        }

        label {
            display: flex;
            align-items: center;
            height: 100%;
    
            position: absolute;
            top: 0;
            left: 12px;
    
            transition: top 0.5s, left 0.3s ease-out;
        }

    
        input:focus ~ svg {
            color: var(--color-primary);
        }
    
        svg {
            width: 18px;
            height: 18px;
        }
    }



`;
