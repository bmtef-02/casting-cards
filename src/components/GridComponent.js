import React from "react";
import CardComponent from "./CardComponent";
import CardComponent2 from "./CardComponent2";

const styles = {
    row: {
        margin: '10px'
    }
}

function GridComponent() {
    return (
        <div className="container">
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent2 />
                </div>
                <div className="col">
                    <CardComponent2 />
                </div>
                <div className="col">
                    <CardComponent2 />
                </div>
                <div className="col">
                    <CardComponent2 />
                </div>
            </div>
            <div className="row" style={styles.row}>
                <div className="col">
                    <CardComponent2 />
                </div>
                <div className="col">
                    <CardComponent2 />
                </div>
                <div className="col">
                    <CardComponent2 />
                </div>
                <div className="col">
                    <CardComponent2 />
                </div>
            </div>
        </div>
    )
}

export default GridComponent;