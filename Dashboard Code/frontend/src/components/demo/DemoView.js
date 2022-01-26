import React, { Component } from 'react';
import { Button, Pane, Tablist, SidebarTab, TextInput } from 'evergreen-ui';
import dabVideo from './video/dab.mp4';
import elbowkickVideo from './video/elbowkick.mp4';
import gunVideo from './video/gun.mp4';
import hairVideo from './video/hair.mp4';
import listenVideo from './video/listen.mp4';
import pointhighVideo from './video/pointhigh.mp4';
import sidepumpVideo from './video/sidepump.mp4';
import wipetableVideo from './video/wipetable.mp4';

import {
    VideoBg,
    VideoContentDiv,
    VideoInfoDiv,
    VideoDiv,
    VideoP
} from './DemoViewStyledComponents';

export class DemoView extends Component {

    state = {
        activeIndex: -1,
        tabs: ['Dab', 'Elbow Kick', 'Gun', 'Hair', 'Listen', 'Point High', 'Side Pump', 'Wipe Table'],
    }

    render() {

        let videoComponent;
        let videoP;

        if (this.state.activeIndex == -1) {
            videoComponent = (
                <h1>
                    Select a Dance Move!
                </h1>
            )
        } else if (this.state.activeIndex == 0) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={dabVideo} type='video/mp4' />
            );

            videoP = 'Dab is a classic dance move. Simply point your right/left elbow downwards in either direction while the other elbow straightens out in the opposite direction.'

        } else if (this.state.activeIndex == 1) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={elbowkickVideo} type='video/mp4' />
            );

            videoP = 'Raise your thighs and push your elbows down in either direction.';

        } else if (this.state.activeIndex == 2) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={gunVideo} type='video/mp4' />
            );

            videoP = 'Shoot your arms as if it is an extension of a gun';

        } else if (this.state.activeIndex == 3) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={hairVideo} type='video/mp4' />
            );
            videoP = 'Comb back your hair in either direction';

        } else if (this.state.activeIndex == 4) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={listenVideo} type='video/mp4' />
            );
            videoP = 'Cup your ears in either direction.';

        } else if (this.state.activeIndex == 5) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={pointhighVideo} type='video/mp4' />
            );
            videoP = 'Point high in either direction.';

        } else if (this.state.activeIndex == 6) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={sidepumpVideo} type='video/mp4' />
            );
            videoP = 'Pump your arms inwards in either direction.'

        } else if (this.state.activeIndex == 7) {
            videoComponent = (
                <VideoBg autoPlay loop muted src={wipetableVideo} type='video/mp4' />
            );
            videoP = 'Act as if you are wiping the table.';
        }
        return (
         <Pane display='flex' height={400} backgroundColor='#3c3c3c' elevation={2}  >
             <Tablist flexBasis={240} marginLeft={24} >
                 {this.state.tabs.map((tab, index) => (
                     <SidebarTab 
                        key={tab}
                        id={tab}
                        onSelect={() => this.setState({ activeIndex: index })}
                        isSelected={index === this.state.activeIndex}
                        aria-controls={`panel-${tab}`}
                        backgroundColor='#494747'
                        marginTop={15}
                    >
                        <h4 style={{ color: 'white' }}  > {tab} </h4>
                    </SidebarTab>
                 ))}
                 
             </Tablist>
             <Pane  flex="1" >
                {this.state.tabs.map((tab, index) => (
                    <Pane
                        key={tab}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab}
                        aria-hidden={index !== this.state.activeIndex}
                        display={index === this.state.activeIndex ? 'block' : 'none'}
                    >
                        <VideoDiv>
                            <VideoContentDiv>
                                {videoComponent}
                            </VideoContentDiv>
                            <VideoInfoDiv>
                                <VideoP>
                                    {videoP}
                                </VideoP>
                            </VideoInfoDiv>
                        </VideoDiv>
                </Pane>
                ))}
            </Pane>
         </Pane>
        )
    }
}

export default DemoView;
