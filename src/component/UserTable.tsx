import React, { useMemo } from "react";
// import { useTable, Column } from "react-table";
// import { IAdmins } from "./TableTypes";
import { Table, Tr, Th } from "../styling/css"


type ViewAllAdminsProps = {
  fullName?: string;
  email?: string;
  stack?: string;
  assignRole?: string;
  squad?: string;
  action?: string;
};

const UserTable = (props: ViewAllAdminsProps) => {
  const {fullName, email, stack, assignRole, squad, action} = props;
    return (
      <>
        <Table>
          <Tr>
            <Th>{fullName && fullName}</Th>
            <Th>{email && email}</Th>
            <Th>{stack && stack}</Th>
            <Th>{assignRole && assignRole}</Th>
            <Th>{squad && squad}</Th>
            <Th>{action && action}</Th>
          </Tr>

        </Table>
      </>
    );
}

export default UserTable;