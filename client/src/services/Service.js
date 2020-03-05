import axios from "axios";

class Service {
    constructor(){
        this.instance =axios.create({
            baseURL: '${process.env.REACT_APP_API_URL}/students'
        })
    }

    fetchStudents = () => {
        return this.instance
        .get("/")
        .then(res => res.data)
        .catch(error => console.log(error));
    };

}