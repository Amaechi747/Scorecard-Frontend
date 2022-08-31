import React, { useMemo } from "react";
// import { useTable, Column } from "react-table";
// import { IAdmins } from "./TableTypes";
import { Table, Tr, Th, Td } from "../styling/css"
import FormSelect from "./UserFormSelect";


type AdminTableProp = {
  tableData: any;
  action?: string;
};

const AdminTable = (props: AdminTableProp) => {
  const { tableData } = props;
  return (
    <>
      <Table>
        <thead style={{ padding: '1rem 3rem' }}>

          <Th>Full Name</Th>
          <Th>Email</Th>
          <Th>Stack</Th>
          <Th>Assigned Role</Th>
          <Th>Squad</Th>
          <Th>Action</Th>
        </thead>
        <tbody>
          {tableData.map((data: any, index: number) => <Tr key={index}>
            <Td>{data.firstName} {data.firstName}</Td>
            <Td>{data.email}</Td>
            <Td>{data.stack}</Td>
            <Td>{data.role}</Td>
            <Td>{data.squad[0]}</Td>
            <Td><FormSelect key={index} id={data._id} /></Td>
          </Tr>)}

        </tbody>
      </Table>
    </>
  );
}

export default AdminTable;

