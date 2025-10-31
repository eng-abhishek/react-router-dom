import React from "react";
import {Link, useParams} from 'react-router-dom';
function UserDetail(){
   const param = useParams();
   const userID = param.id;

    return(<>
    <div>
        <h3>This Is User {userID} - Page</h3>
    </div>
    </>);
    
}

export default UserDetail;
