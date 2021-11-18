
import React, { useEffect,useState } from 'react';
import { Container, Table,Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
     const {user} = useAuth();   
      const [myUser, setMyuser] = useState([]); 
      useEffect(()=>{
            fetch(`https://safe-harbor-87472.herokuapp.com/travelerBooking/${user.email}`)
            .then(res=> res.json())
            .then(data => setMyuser(data));
      },[]);

      //delete an user
    const handleDelteUser = id => {
          const url = `https://safe-harbor-87472.herokuapp.com/travelerBooking/${id}`;
          fetch(url,{
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>  {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingUsers = myUser.filter(orderr => orderr._id !== id);
                    setMyuser(remainingUsers);
                }
          })
    }
      console.log(myUser);
    return (
        <div className="py-5">
              <Container>
                <h2 className="text-center">MY Order</h2>
                <br />
                 <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Booking Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myUser.map(order => 
                        <tr>
                            <td>{order.booking}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td><Button onClick={()=> handleDelteUser(order._id)} variant="primary">Delete</Button></td>
                        </tr>
                        )}   
                    </tbody>
                    </Table>
              </Container>
              
              
        </div>
    );
};

export default MyOrder;