import React, {Component} from 'react';
// import { thisExpression } from '@babel/types';
const divStyle = {
    margin: '40px'
};
const h2Style = {
    fontSize: '1.8em',
    textAlign: 'left'
};
const col25Style = {
    float: 'left',
    width: '25%'
};
const col75Style = {
    float: 'left',
    width: '75%',
};
const textAreaStyle = {
    width: '75%',
    cols: '80',
    rows: '4' 
}
const pStyle = {
    padding : '10px'
}
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
            self.state.targetName=e.target.value.trim();
            // console.log(self.state.targetName);
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
            // console.log("CALLED MAKECHANGES\n");
            for(let i=0;i<self.events.length;i++){
                if(self.events[i].name.trim()===self.state.targetName){
                    // console.log(self.events[i]);
                    self.events[i]=self.state.targetEvent;
                    alert("Successfully changed!!\n");
                    return;
                }
            }
            alert("value not changed, reload page and try again");
        }

        function addTargetEvent(e){
            let found=false;
            self.events.forEach(event=>{
                if(event.name.trim()===self.state.targetName){
                    self.state.targetEvent=event;
                    found=true;
                }
            });
            if(found){
                alert("Event is already added, modify using \"modify select event\"");
            } else {
                // console.log("ADDING EVENT : " + self.state.targetName);
                self.state.targetEvent.name=self.state.targetName;
                self.events.push({...self.state.targetEvent});
                alert("Event added successfully, modify it using \"modify select event\"");
            }
        }

        return(
            <div>
                {this.state.yetToSelectEvent && (
                    <div style={divStyle}>
                        Event:  <input type="text" onChange={setTarget}></input> <p></p> 
                        <button onClick={setTargetEvent}>modify select event</button>  
                        <button onClick={addTargetEvent}>add select event</button>                         
                    </div>
                )}
                {(!this.state.yetToSelectEvent)&&(
                    <div style={divStyle}>
                        <h2 style={h2Style}>Selected event: {this.state.targetEvent.name} </h2>
                        <p style={pStyle}>   <div style={col25Style}> Day: </div>              <div style={col75Style}> <input type="number" value={this.state.targetEvent.etime.day} onChange={this.setTargetDay}></input></div> </p>
                        <p style={pStyle}>   <div style={col25Style}> Hrs: </div>              <div style={col75Style}> <input type="number" value={this.state.targetEvent.etime.hrs} onChange={this.setTargetHrs}></input></div> </p>
                        <p style={pStyle}>   <div style={col25Style}> Min: </div>              <div style={col75Style}> <input type="number" value={this.state.targetEvent.etime.min} onChange={this.setTargetMin}></input></div> </p>
                        <p style={pStyle}>   <div style={col25Style}> Venue: </div>            <div style={col75Style}> <input type="text" value={this.state.targetEvent.venue} onChange={this.setTargetVenue}></input></div> </p>
                        <p style={pStyle}>   <div style={col25Style}> Winner:</div>            <div style={col75Style}> <textarea type="text" style={textAreaStyle} value={this.state.targetEvent.winner} onChange={this.setWinner}></textarea></div> </p>
                        <p style={pStyle}>   <div style={col25Style}> Announcements: </div>    <div style={col75Style}> <textarea type="text" style={textAreaStyle} value={this.state.targetEvent.announcements} onChange={this.setAnns}></textarea></div></p>
                        <p style={pStyle}>   <div style={col25Style}> Description:</div>       <div style={col75Style}> <textarea type="text" style={textAreaStyle} value={this.state.targetEvent.descript} onChange={this.setDesc}></textarea></div></p>
                        <p style={pStyle}>   <div style={col25Style}> Image cdns: </div>       <div style={col75Style}> <textarea type="text" style={textAreaStyle} value={this.state.targetEvent.img_cdns} onChange={this.setImgs}></textarea></div></p>
                        <p style={pStyle}> <button onClick={makeChanges}>CHANGE</button>  </p>
                        <p style={pStyle}>Note: change is permanent</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Admin;