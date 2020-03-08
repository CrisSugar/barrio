import axios from "axios";

class Service {
    constructor(){
        this.service =axios.create({
            baseURL: '${process.env.REACT_APP_API_URL}'
        })
    }

    // fetchStudents = () => {
    //     return this.instance
    //     .get("/")
    //     .then(res => res.data)
    //     .catch(error => console.log(error));
    // };


    getAllShops = () => {
        return this.service
        .get("/shops")
        .then(response => response.data)
        .catch(error => console.log(error));
    };

    getAnyShop = (id) => {
        return this.service
        .get("/shop/:id")
        .then(response => response.data)
        .catch(error => console.log(error));
    }

}

export default Service;