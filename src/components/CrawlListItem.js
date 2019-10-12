import styled from 'styled-components';
import themes from '../themes.js'

export const CrawListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CrawlListItem = styled.button`
    padding: 10px 0;
    border-radius: 10px;
    background: transparent;
    color: ${props=> props.color || themes.textColor}
    font-weight: 500;
    font-size: 16px
    padding: 8px 60px;
    border-style: none;
    list-style-type: none;
    margin: 5px;
    border: 3px solid ${props => props.color || themes.secondaryColor}};
    &:hover {
        transform: scale(1.2)
    }
`