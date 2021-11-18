import React, { useEffect, useState } from 'react';
import { Container, Table,Button } from 'react-bootstrap';


const ManageOrder = () => {
     const [allOrder, setAllOrder] = useState([]);
     useEffect(()=>{
         fetch('https://safe-harbor-87472.herokuapp.com/travelerBooking')
         .then(res => res.json())
         .then(data => setAllOrder(data))
     },[]);
     console.log(allOrder);
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
                    const remainingUsers = allOrder.filter(orderr => orderr._id !== id);
                    setAllOrder(remainingUsers);
                }
          })
    }
    return (
        <div className="py-5">
              <Container>
                <h2 className="text-center">Manage All Order</h2>
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
                        {allOrder.map(order => 
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

export default ManageOrder;