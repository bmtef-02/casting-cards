import React from "react";
import placeholder from "../img/placeholder.png"

const styles = {
    card: {
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
        height: '2.26in',
        width: '2.44in'
    },
    cardBody: {
        padding: '0',
        marginTop: '3px'
    },
    cardInfo: {
        textAlign: 'center',
        marginBottom: '0'
    }
};

function CardComponent2() {
    return (
        <div className="card rounded-0" style={styles.card}>
            <img src={placeholder} className="card-img-top rounded-0" style={styles.img} />
            <div className="card-body" style={styles.cardBody}>
                <p className="card-text" style={styles.cardInfo}>Name</p>
                <p className="card-text" style={styles.cardInfo}>Ethnicity</p>
                <p className="card-text" style={styles.cardInfo}>Relationship Status</p>
                <p className="card-text" style={styles.cardInfo}>Location</p>
                <p className="card-text" style={styles.cardInfo}>Age</p>
                <p className="card-text" style={styles.cardInfo}>IQ</p>
            </div>
        </div>
    );
}

export default CardComponent2;