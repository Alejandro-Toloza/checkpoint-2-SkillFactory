import React from 'react';

const Users = () => {
    return( 
        <div>
            <h1>Users</h1>
            <table class="table table-dark table-striped">
              <thead>  
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Company name</th>
                </tr>   
              </thead>   
            </table>   
          </div>
    );
}

export default Users;