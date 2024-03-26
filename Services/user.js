import {
    setUser,
    setUserError,
    setUserProcessing,

} from '../actions/user';
import axios from '../utils/axios';

let users = [
    {
        "ID": "1",
        "FirstName": "Awais",
        "LastName": null,
        "Email": "abc@gmail.com",
        "UserName": null,
        "Password": null,
        "IsActive": "1",
        "CreatedBy": null,
        "CreatedDate": "2020-03-03T19:00:00.000Z",
        "ModifiedBy": null,
        "ModifiedDate": null,
        "DeparmentID": null,
        "DepartmentName": "Dept 2",
        "UserSourceID": null,
        "Role": ["Admin"]
    },
    {
        "ID": "5",
        "FirstName": "user 2",
        "LastName": null,
        "Email": "abc@gmail.com",
        "UserName": null,
        "Password": null,
        "IsActive": "1",
        "CreatedBy": null,
        "CreatedDate": "2020-03-03T19:00:00.000Z",
        "ModifiedBy": null,
        "ModifiedDate": null,
        "DeparmentID": null,
        "DepartmentName": "Dept 3",
        "UserSourceID": null,
        "Role": ["Admin"]
    },
    {
        "ID": "6",
        "FirstName": "user 3",
        "LastName": null,
        "Email": "abc@gmail.com",
        "UserName": null,
        "Password": null,
        "IsActive": "1",
        "CreatedBy": null,
        "CreatedDate": "2020-03-03T19:00:00.000Z",
        "ModifiedBy": null,
        "ModifiedDate": null,
        "DeparmentID": null,
        "DepartmentName": "Dept 1",
        "UserSourceID": null,
        "Role": ["Admin"]
    }
];

export const getUserView = (userData) => {
    let roles = userData.roles;
    let View = {};
    roles.forEach((role)=> {
        role.permissions.forEach((permission)=>{
            if(View[permission.Group]){
                if(!View[permission.Group].some((user)=>user.ID === permission.ID)) {
                    View[permission.Group].push(permission);
                }
            } else {
                View[permission.Group] = [];
                View[permission.Group].push(permission);
            }
        })
    });
return View;
};



