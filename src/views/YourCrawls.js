import React from 'react'
import {CrawListContainer, CrawlListItem} from '../components/CrawlListItem.js';
import themes from '../themes.js'
import PageContainer from '../components/PageContainer.js';

class YourCrawls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            crawls: [
            {
                date: 'Saturday, October 12',
                time: '9:00 pm - 2:00 am',

            },
            {
                date: 'Saturday, October 12',
                time: '9:00 pm - 2:00 am',
            }],
        }
    }

    componentDidMount() {
        // fetch user crawls
        // fetch()
    }

    render() {
        return(
            <PageContainer>
                <h1 style= {{ textAlign: 'center', color: themes.textColor}}>
                    Your Crawls
                </h1>
                <div className='CrawlList'>
                    <CrawListContainer>
                        {this.state.crawls.map((crawl) => 
                            <CrawlListItem>
                                <ul style={{ listStyleType: 'none', paddingLeft: '0'}}>
                                    <li>{crawl.date}</li>
                                    <li>{crawl.time}</li>
                                    <li>{crawl.members || 0} crawlers </li>
                                    <li>Led by: {crawl.leader}</li>
                                </ul>
                            </CrawlListItem>
                        )}
                    </CrawListContainer>
                </div>
            </PageContainer>
        )
    }
}

export default YourCrawls;