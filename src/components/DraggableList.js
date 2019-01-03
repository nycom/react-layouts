import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

class DraggableList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { text: "No 1" },
                { text: "No 2" },
                { text: "No 3" },
                { text: "No 4" }
            ],
        }

    }
    onDragStart = (e, v) => {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", v)
    }
    
    render() {
        const { items } = this.state;
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center" spacing={24}>
                    <Grid item xs={12}>
                        <h2>Components:</h2>
                    </Grid>
                    {
                        items.map((item, i) => {
                            return (
                                <Grid item xs={12} key={i} draggable onDragStart={(e) => this.onDragStart(e, item.text)}>
                                    <Paper>
                                        <div className="draggable-item"><Avatar><FaceIcon color="primary"/></Avatar>{item.text}</div>
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }

}

export default DraggableList;