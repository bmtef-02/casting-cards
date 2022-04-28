import React from "react";
import placeholder from "../img/placeholder.png"

const styles = {
    container: {
        border: 'solid 2px black',
        width: '2.48in',
        height: '3.92in',
    },
    rowImg: {
        borderBottom: 'solid 2px black',
        height: '2.28in',
    },
    img: {
        objectFit: 'cover',
        padding: '0',
        height: '2.26in',
        width: '2.48in'
    },
    rowInfo: {
        justifyContent: 'center'
    }
};

function CardComponent() {
    return (
        <div className="container" style={styles.container}>
            <div className="row" style={styles.rowImg}>
                <img src={placeholder} style={styles.img} />
            </div>
            <div className="row">
                <div className="col" style={{ paddingTop: '3px' }}>
                    <div className="row" style={styles.rowInfo}>Name</div>
                    <div className="row" style={styles.rowInfo}>Ethnicity</div>
                    <div className="row" style={styles.rowInfo}>Relatiosnhip Status</div>
                    <div className="row" style={styles.rowInfo}>Location</div>
                    <div className="row" style={styles.rowInfo}>Age</div>
                    <div className="row" style={styles.rowInfo}>IQ</div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;