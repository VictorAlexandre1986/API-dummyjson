import { useEffect, useState } from "react"
import './Api.css'


const Api = () => {

    const [users, setUsers] = useState([])


    useEffect(()=>{
        fetch("https://dummyjson.com/users")
            .then(response => response.json())
            .then(json =>{
                console.log(json.users)
                setUsers(json.users)
            } )
    },[])

  return (
    <div>
        <div className="Container">
          {users.map((user)=>
          <div className='Card' key={user.id}>
              <img src={user.image}></img>
              <p><strong>Name: </strong>{user.firstName} {user.lastName}</p>
              <p><strong>Age: </strong>{user.age} -  <strong>birthday: </strong>{user.birthDate}</p>
              <p><strong>Gender: </strong>{user.gender}</p>
              <p><strong>E-mail: </strong>{user.email}</p>
          </div>
          )}
        </div>
    </div>
  )
}

export default Api