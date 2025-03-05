import axios from "axios";

const getUserFullData = async (id) => {
    const data = {name:"",email:"",todos:[],posts:""}

    try {
        const rest1 = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        data.name=rest1.data.name
        data.email=rest1.data.email
        
    
        const rest2 = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        data.todos = rest2.data
            .filter((element)=>(element.userId===id))
            .map((element)=>(element.title))
            .slice(0,5)

        const rest3 = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const arrHelp = rest3.data.filter((element)=>(element.userId==id)).filter((element)=>element.title)
        data.posts = arrHelp[0].title
        console.log(data);
        return data

    } catch (error) {
        console.log("error");
        
    }
}

export {getUserFullData} 