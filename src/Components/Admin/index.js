import React, {Component} from 'react';
import { thisExpression } from '@babel/types';

class Admin extends Component {
    check(e){
        console.log(e.target);
    }
    state = {
        targetEvent: {
            name: "enter name",
            etime: {
                hrs: 2,
                min: 1,
                day: 2
            },
            venue: "",
            winner: "",
            announcements: "",
            descript: "",
            img_cdns: ""
        },
        yetToSelectEvent: true,
        targetName: ""
    }
    events = [
        {
            name: "name1",
            etime: {
                hrs: 2,
                min: 1,
                day: 3
            },
            venue: "venue 1",
            winner: "asdf sadf",
            announcements: "announcement 1\nannouncement 2\nannouncement 3",
            descript: "wkl;aj d   sdkfjaskdf asdfj adsfjawoepfj alej foajdsf",
            img_cdns: "https://imgs.com/img1.jpeg\nhttps://imgs.com/img2.jpeg"
        }
    ]

    // make copy of entire struct, ref: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react

    setTargetDay = e => this.setState({ targetEvent : {
        name:this.state.targetEvent.name, venue:this.state.targetEvent.venue, winner:this.state.targetEvent.winner, 
        announcements: this.state.targetEvent.announcements,
        descript: this.state.targetEvent.descript, img_cdns:this.state.img_cdns,
        etime: { 
            day: parseInt(e.target.value), hrs: this.state.targetEvent.etime.hrs, min: this.state.targetEvent.etime.min 
        }
    }}); // fu react :/

    setTargetHrs = e => this.setState({ targetEvent : { 
        name:this.state.targetEvent.name, venue:this.state.targetEvent.venue, winner:this.state.targetEvent.winner, 
        announcements: this.state.targetEvent.announcements,
        descript: this.state.targetEvent.descript, img_cdns:this.state.img_cdns,
        etime: { 
            hrs: parseInt(e.target.value), day: this.state.targetEvent.etime.day, min: this.state.targetEvent.etime.min 
        }
    }});

    setTargetMin = e => this.setState({ targetEvent : { 
        name:this.state.targetEvent.name, venue:this.state.targetEvent.venue, winner:this.state.targetEvent.winner, 
        announcements: this.state.targetEvent.announcements,
        descript: this.state.targetEvent.descript, img_cdns:this.state.img_cdns,
        etime: { 
            min: parseInt(e.target.value), hrs: this.state.targetEvent.etime.hrs, day: this.state.targetEvent.etime.day 
        }
    }});

    setTargetVenue = e => this.setState({ targetEvent : {
        etime: this.state.targetEvent.etime, name: this.state.targetEvent.name, winner: this.state.targetEvent.winner, 
        announcements:this.state.targetEvent.announcements, 
        descript: this.state.targetEvent.descript, img_cdns:this.state.img_cdns,
        venue: e.target.value
    }});

    setWinner = e => this.setState({ targetEvent : {
        name: this.state.targetEvent.name,  etime: this.state.targetEvent.etime, venue: this.state.targetEvent.venue, 
        announcements:this.state.targetEvent.announcements, 
        descript: this.state.targetEvent.descript, img_cdns:this.state.img_cdns,
        winner: e.target.value
    }});

    setAnns = e => this.setState({ targetEvent : {
        name: this.state.targetEvent.name,  etime: this.state.targetEvent.etime, venue: this.state.targetEvent.venue, 
        winner: this.state.targetEvent.winner, 
        descript: this.state.targetEvent.descript, img_cdns:this.state.img_cdns,
        announcements: e.target.value 
    }});

    setDesc = e => this.setState({targetEvent:{
        name: this.state.targetEvent.name,  etime: this.state.targetEvent.etime, venue: this.state.targetEvent.venue, 
        winner: this.state.targetEvent.winner, announcements:this.state.targetEvent.announcements,
        img_cdns:this.state.img_cdns, descript: e.target.value
    }})

    setImgs = e => this.setState({targetEvent:{
        name: this.state.targetEvent.name,  etime: this.state.targetEvent.etime, venue: this.state.targetEvent.venue, 
        winner: this.state.targetEvent.winner, announcements:this.state.targetEvent.announcements,
        descript:this.state.descript, img_cdns: e.target.value    
    }})

    render(){
        const self=this;
        function setTarget(e) {
            // this.state.targetName=e
            self.state.targetName=e.target.value.trim();
            console.log(self.state.targetName);
        }
        function setTargetEvent(e){
            let found=false;
            self.events.forEach(event=>{
                if(event.name.trim()===self.state.targetName){
                    self.state.targetEvent=event;
                    found=true;
                }
            });
            if(!found){
                alert("Enter a valid event name");
                self.setState({yetToSelectEvent:true});
            } else {
                // console.log("S")
                self.setState({yetToSelectEvent:false});
            }
        }

        function makeChanges(e){
            console.log("CALLED MAKECHANGES\n");
            for(let i=0;i<self.events.length;i++){
                if(self.events[i].name.trim()===self.state.targetName){
                    console.log(self.events[i]);
                    self.events[i]=self.state.targetEvent;
                    alert("Successfully changed!!\n");
                    return;
                }
            }
            alert("value not changed, reload page and try again");
        }

        return(
            <div>
                {this.state.yetToSelectEvent && (
                    <div> Event:  <input type="text" onChange={setTarget}></input> <button onClick={setTargetEvent}>select</button> </div>
                )}
                {(!this.state.yetToSelectEvent)&&(
                    <div>
                        <h2>Selected event: {this.state.targetEvent.name} </h2>
                        Day: <input type="number" value={this.state.targetEvent.etime.day} onChange={this.setTargetDay}></input> <p></p>
                        Hrs: <input type="number" value={this.state.targetEvent.etime.hrs} onChange={this.setTargetHrs}></input> <p></p>
                        Min: <input type="number" value={this.state.targetEvent.etime.min} onChange={this.setTargetMin}></input> <p></p>
                        Venue: <input type="text" value={this.state.targetEvent.venue} onChange={this.setTargetVenue}></input> <p></p>
                        Winner: <textarea type="text" value={this.state.targetEvent.winner} onChange={this.setWinner}></textarea> <p></p>
                        Announcements: <textarea type="text" value={this.state.targetEvent.announcements} onChange={this.setAnns}></textarea><p></p>
                        Description: <textarea type="text" value={this.state.targetEvent.descript} onChange={this.setDesc}></textarea><p></p>
                        Image cdns: <textarea type="text" value={this.state.targetEvent.img_cdns} onChange={this.setImgs}></textarea>
                        <p></p>
                        <button onClick={makeChanges}>CHANGE</button> <p>Nore: change is permanent</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Admin;