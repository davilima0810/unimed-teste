import React from 'react';
import AddEditUserTemplate from '@/templates/UserTemplate/AddEditUserTemplate';

interface UserProps {
  params: {
    id: string
  }
}

const EditUsers = ({ params }: UserProps) => {
  return <AddEditUserTemplate id={params?.id} />;
};


export default EditUsers;
