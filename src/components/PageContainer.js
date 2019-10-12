import themes from '../themes.js'
import styled from 'styled-components'

const PageContainer = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background: ${themes.background};
`

export default PageContainer