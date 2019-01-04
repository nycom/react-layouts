import React, { Component } from 'react';
import DraggableList from '../components/DraggableList';
import Grid from '@material-ui/core/Grid';
import LayoutX from '../components/LayoutX';
import {Link} from 'react-router-dom';


class EditLayoutPage extends Component {

    constructor(props) {
        super(props);
        if (!props.match.params.id) {
            // option to redirect to home page on not found layout 
            // this.props.history.push('/');
        }
        else {
            this.state = { ...props.match.params };
        }
    }

    render() {
        return (

            <Grid container className="edit-layout-container" direction="row" spacing={24}>
                <Grid item md={2} sm={3} xs={4}>
                    <DraggableList />
                </Grid>

                <Grid item md={10} sm={9} xs={8}>
                    <div className="home-link">
                        <Link to="/">Back To Home</Link>            
                     </div>
                    <h1>Configurations View</h1>
                    <LayoutX layoutName={'layout_'+this.state.id}></LayoutX>
                </Grid>
            </Grid>
        );
    }
}

export default EditLayoutPage;
