import { useState, useEffect } from "react"
import axios from "axios";
import Cards from './Cards';
import Form from '../searchForm/Form'
const TotalStatistics = () => {
    const [totalStatistics, setTotalStatistics] = useState();
    const getTotalData = async () => {
        try {
            const response = await axios.get(`https://api.covid19api.com/world/total`);
            const totalData = await response.data;
            setTotalStatistics(totalData);
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        getTotalData();
    }, []);
    return (
        <>
            <div style={{ fontWeight: '900', width: '180px', margin: 'auto', fontSize: "1.2rem" }}>
                <p>World Total Statistics</p>
            </div>
            {totalStatistics && <Cards data={totalStatistics} />}
            <Form />
        </>
    )
}
export default TotalStatistics;