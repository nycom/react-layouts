import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import { connect } from "react-redux";
import store from "../redux/store";
import { addItem } from "../redux/actions";
import { Paper } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const mapStateToProps = (state, ownProps) => {
    // saved in redux only the model data (taxt) all UI data stayed here for responsiveness
    return {
        layout: state[ownProps.layoutName].containers[ownProps.recId].map((item, i) => {
            console.log(ownProps.cols);
            return {
                text: item.text,
                i: i.toString(),
                x: i % 4,
                y: 0,
                w: 1,
                h: 2,
                static: true,
            };
        })
    };
};

class Receptor extends React.Component {
    static defaultProps = {
        className: "layout",
        onLayoutChange: function () { },
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 4 },
        rowHeight: 20
    };

    createElement(el) {
        return (
            <div className="element" key={el.i} data-grid={el}>
                <Avatar><FaceIcon color="primary"/></Avatar>
                <span>{el.text}</span>
            </div>
        );
    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    onAddItem = (e) => {
        const data = e.dataTransfer.getData("text/plain");
        store.dispatch(addItem({ layoutName: this.props.layoutName, recId: this.props.recId, data: { text: data } }));
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange = (breakpoint, cols) => {
        console.log(cols);
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    onLayoutChange = (layout) => {
        this.props.onLayoutChange(layout);
        this.setState({ layout: layout });
    }

    render() {
        return (
            <Paper>
                <div onDragOver={this.allowDrop} onDrop={this.onAddItem}>
                    <ResponsiveReactGridLayout
                        onLayoutChange={this.onLayoutChange}
                        onBreakpointChange={this.onBreakpointChange}
                        {...this.props}>

                        {_.map(this.props.layout, el => this.createElement(el))}
                    </ResponsiveReactGridLayout>
                </div>
            </Paper>

        );
    }
}
export default connect(mapStateToProps)(Receptor);