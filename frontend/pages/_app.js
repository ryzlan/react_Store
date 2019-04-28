import App ,{Container } from 'next/app'
import Page from '../components/Page'

class MyApp extends App {
    state = {  }
    render() { 
        const {Component} = this.props;

        return ( 
            <Container>
                <p>App page </p>
                <Page>
                    <Component />
                </Page>

            </Container>
        );
    }
}
 
export default MyApp;