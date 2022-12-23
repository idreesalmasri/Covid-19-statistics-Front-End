

const Cards = (props) => {

    let statisticsKeys = Object.keys(props.data);
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 'auto',
            width: '700px',
        }}>
            {
                statisticsKeys.map((e, index) => {
                    return (

                        <div
                            className='card'
                            key={index}
                            style={{
                                width: '140px',
                                height: "100px",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,1)",
                                transition: "0.3s",
                                padding: '2px 14px',
                                backgroundColor: "#008b8b",
                            }}
                        >
                            <h3
                                style={{
                                    color: "black",
                                    textAlign: "center",
                                }}
                            > {e}</h3>
                            <hr></hr>
                            <p style={{ textAlign: "center" }}>{props.data[e]}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}
export default Cards;