import React from 'react';
import { Nav } from '../components/nav';
import { ListPhones } from '../components/Home/listPhones';

export const AdminPage = () => {
  return (
    <>
      <Nav />
      <ListPhones title="ADMIN" isAdmin={true} />
    </>
  );
};
