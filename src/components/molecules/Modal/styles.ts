import styled from 'styled-components'

export const Content = styled.div`
    /* create overlay */
    #overlay {
        position: fixed;
        /* opacity: 0; */

        /* fill the screen */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;

        /* color  */
        background-color: rgb(0, 0, 0, 0.5);
        /* remove click events */
        /* pointer-events: none; */

        /* Show the overlay and enable click */
        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }
`

type WrapperProps = {
    zIndex?: number
}
export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    padding: 24px;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 4px;
    z-index: ${({ zIndex }) => zIndex || 999};
    background: #fff;
    transition: 200ms ease-in-out;
    min-width: 370px;
    max-width: 1186px;

    &.active {
        transform: translate(-50%, -50%) scale(1);
    }

    @media (max-width: 520px) {
        width: 90%;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 40px;
        color: rgba(0, 0, 0, 0.88);
    }
`

export const Body = styled.div`
    p {
        text-align: left;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.64);
    }
`
