import axios from "axios"


export const GetStates = async () => {
    const response = await axios.get("http://pc.fpanel.ir/city.json")
    const finallyData = response.data.map(item => ({
        value: item.name,
        label:item.name,
        city:item.cities,
        id:item.id,
    }));
    return finallyData
    
} 