import React from 'react'
import { UserTable } from "../component";

type ViewAllAdmins = {
}
const ViewAllAdmins = (props: ViewAllAdmins) => {
  return (
    <div style={{ padding: '0 auto'}}>


      <UserTable
        fullName="Full Name"
        email="Email"
        stack="Stack"
        assignRole="Assign Role"
        squad="Squad"
        action="Action"

      />
    </div>
  );
};

export default ViewAllAdmins;