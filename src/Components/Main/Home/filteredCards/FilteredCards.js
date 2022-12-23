
const FilteredCards = (props) => {
    console.log(props);
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 'auto',
            width: '900px',
            flexWrap: "wrap",
            marginTop: "25px",
            marginBottom: '25px',
        }}>
            {
                props.data.map((e, index) => {
                    return (

                        <div
                            className='card'
                            key={index}
                            style={{
                                width: '255px',
                                height: "100px",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,1)",
                                transition: "0.3s",
                                padding: '2px 14px',
                                backgroundColor: "#008b8b",
                                marginTop: "15px",
                                marginBottom: "35px"
                            }}
                        >
                            <h3
                                style={{
                                    color: "black",
                                    textAlign: "center",
                                }}
                            > Date: {e.Date}</h3>
                            <hr></hr>
                            <p style={{ textAlign: "center", color: 'black' }}>Number of confirmed cases: {e.Cases}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}
export default FilteredCards;