import React, { Component } from 'react';
import DraggableList from '../components/DraggableList';
import Grid from '@material-ui/core/Grid';
import Layout0 from '../components/Layout0';
// import LayoutX from '../components/LayoutX';
import Layout1 from '../components/Layout1';
import Layout2 from '../components/Layout2';
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

    layoutSelect() {
        switch (this.state.id) {
            case '0':
                return <Layout0 layoutName={'layout_'+this.state.id}></Layout0>
            case '1':
                return <Layout1 layoutName={'layout_'+this.state.id}></Layout1>
            case '2':
                return <Layout2 layoutName={'layout_'+this.state.id}></Layout2>
            case '3':
                return <Layout0 layoutName={'layout_'+this.state.id}></Layout0>
            case '4':
                return <Layout1 layoutName={'layout_'+this.state.id}></Layout1>
            case '5':
                return <Layout2 layoutName={'layout_'+this.state.id}></Layout2>
            default:
                return <h1>Item Not Found!!!</h1>

        }
    }

    render() {
        return (

            <Grid container direction="row" spacing={24}>

                <Grid item md={2} sm={3} xs={4}>
                    <DraggableList />
                </Grid>

                <Grid item md={10} sm={9} xs={8}>
                <div className="home-link">
                    <Link to="/">Back To Home</Link>            
                </div>
                <h1>Configurations View</h1>
                    {this.layoutSelect()}
                </Grid>
            </Grid>
        );
    }
}

export default EditLayoutPage;
