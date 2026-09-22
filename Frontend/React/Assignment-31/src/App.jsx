import { useState , useEffect} from 'react'
import './App.css'
function App() {
  let[users,setUsers] = useState([]);
  let[product,setProduct] = useState({
    pid: 100,
    name: "TV",
    mrp: 500000
  });
  let[discount,setDiscount] = useState();
  function calDis(dis) {
    let offer = product.mrp * dis / 100;
    let discountPrice = product.mrp - offer;
    setDiscount(discountPrice);
  }
  async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let usersList = await res.json();
    setUsers(usersList);
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div>
      <div className="page">
      {users.map((user) => { 
        return(
          <div className='user-card' key={user.id}>
            <p>Name : {user.name}</p>
            <p>Email id : {user.email}</p>
            <p>Username : {user.username}</p>
            <p>City : {user.address.city}</p>
          </div>         
        )
      }
      )}
      </div>
      <div className="second">
      <button className="btn" onClick={() => calDis(15)}>Discount 15%</button>
      <button className="btn" onClick={() => calDis(25)}>Discount 25%</button>
      <button className="btn" onClick={() => calDis(50)}>Discount 50%</button>  
      <h4>Actual Price Of Product : {product.mrp}</h4>
      <h4>Product Price After Discount : {discount}</h4>
      </div>
    </div>
  )
}

export default App