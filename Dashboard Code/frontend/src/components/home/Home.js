import React, { Component } from 'react';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import {
    HomeDiv,
    CoverVideoDiv,
    ContentDiv,
    VideoBg,
    VideoContent,
    HeadlineDiv,
    ContentH1,
    ContentH2,
    ContentH4,
    YellowContentH2,
    SpanDanceEdge,
    NormalSpan,
    ContentMainDiv,
    ParaMainDiv,
    DemoMainDiv,
    DemoBg,
    ParaDiv,
    ButtonsDiv,
    ParaContent
} from './HomeStyledComponents';
import video from './Cover-Video-2.mp4';
import demo from './demo.MOV';
import { IconButton, ArrowRightIcon, Button } from 'evergreen-ui';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Redirect } from 'react-router-dom';
 

export class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('HOME Page Begin', arguments)
        })

        Events.scrollEvent.register('end', (to, element) => {
            console.log('HOME Page End', arguments)
        })
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    scrollTo = () => {
        scroll.scrollTo(100);
    }

    scrollMore = () => {
        scroll.scrollMore(100);
    }

    handleSetActive = (to) => {
        console.log(to);
    } 

    state = {
        onScrollDownButtonHover: false,
    }

    onScrollButtonClicked = event => {
        event.preventDefault();
        console.log('Scroll button clicked on home page');
        // not neccessary but just archiving it 
        // scroller.scrollTo('main-content', {
        //     duration: 500,
        //     offset: 50,
        //     smooth: true
        // })
    }

    onRegisterButtonClicked = event => {
        event.preventDefault();
        console.log('Register Now button clicked on home page')
        // return <Redirect to='/register' />
        // how to redirect to another page, apparently just gotta push to props of history: https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4
        this.props.history.push('/register');
    }

    render() {
        return (
            <React.Fragment>
                <LoginAndRegisterNavBar />
                <HomeDiv>
                    <CoverVideoDiv>
                        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
                        <VideoContent>
                            <HeadlineDiv>
                                <ContentH1> Tired of Dancing Alone?  </ContentH1>
                                <br />
                                <ContentH1> Dying to Dance in a Group?  </ContentH1>
                                <br/>
                                <br/>
                                <YellowContentH2> Don't Worry, <SpanDanceEdge> DanceEdge </SpanDanceEdge>, has got you covered </YellowContentH2>
                                <ContentH4> 
                                        Check out our world-leading technology below
                                        <NormalSpan>
                                            <Link 
                                            activeClass="active"
                                            to="main-content"
                                            spy={true}
                                            offset={0}
                                            duration={500}
                                            smooth={true}
                                            onSetActive={this.handleSetActive}
                                            >
                                                <IconButton 
                                                appearance='primary'
                                                intent='success'
                                                icon={ArrowRightIcon}
                                                onClick={this.onScrollButtonClicked}
                                                // style={{ float: 'right'}}
                                                />    
                                            
                                            </Link>
                                        </NormalSpan>
                                </ContentH4> 
                            </HeadlineDiv>
                        </VideoContent>
                    </CoverVideoDiv>

                    <Element name="main-content">
                        <ContentDiv>
                            <ContentMainDiv>
                                <ParaMainDiv>
                                    <ParaDiv>
                                        <ParaContent>
                                            DanceEdge is the leading remote dance provider company. With the significant disruption caused
                                            by the COVID-19 pandemic on our society, physical interactions are no longer possible. Dancing in a group has 
                                            been made difficult. Dance coaches are no longer able to monitor the progress of their trainees effectively. That was
                                            until, DanceEdge was developed.
                                        </ParaContent>

                                        <ParaContent>
                                            DanceEdge provides a slick user interface dashboard to both coaches and trainees. Each trainee is provided with a one size
                                            fit all hardware motion sensor that detects the trainees position and dance moves. Data is instantaneously sent to the dashboard
                                            for clear visualizations. Learning how to dance in a group has never been made easy...till DanceEdge came along.
                                        </ParaContent>
                                    </ParaDiv>
                                    <ButtonsDiv>
                                        <ContentH2> DanceEdge is currently a one time FREE OF COST promotion till end April! Register today! </ContentH2>
                                        <Button onClick={this.onRegisterButtonClicked} marginTop='16px' >Register Now!</Button>
                                    </ButtonsDiv>
                                </ParaMainDiv>
                                <DemoMainDiv>
                                    <DemoBg autoPlay loop muted src={demo} type='video/MOV' />
                                </DemoMainDiv>
                            </ContentMainDiv>
                        </ContentDiv>
                    </Element>
                    
                </HomeDiv>
            </React.Fragment>
        )
    }
}

export default Home
