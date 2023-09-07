import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonCard,
  Card,
  Gallery,
  RpGallery,
  Subtitle,
  TextGallery,
  TitleGallery,
} from '../../styles/listStyled/listStyled';
import {
  getPhoneStatus,
  getAllPhones,
} from '../../features/listSlice/phoneSlice';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { loadPhones } from '../../features/listSlice/listApiSlice';
import Phone from '../../models/interface';
import { Admin } from '../Admin/deletePhone';

export const ListPhones = ({ title }: { title: string }) => {
  const dispatch = useTypedDispatch();
  const phoneStatus = useTypedSelector(getPhoneStatus);
  const phonesData = useTypedSelector(getAllPhones);
  const isAdmin = true;
  useEffect(() => {
    // Cargamos los datos desde la API
    if (phoneStatus === 'idle') {
      dispatch(loadPhones());
    }
  }, [phoneStatus, dispatch]);
  return (
    <div>
      <Subtitle>{title}</Subtitle>
      <Gallery>
        {phonesData.map((phone: Phone) => (
          <Card key={phone.id}>
            <Link to="/details">
              <img src={phone.photoUrl} alt={phone.name} />
            </Link>
            <TitleGallery>{phone.name}</TitleGallery>
            <TextGallery>{phone.description}</TextGallery>
            <RpGallery>{phone.price}</RpGallery>
            {/* <ButtonCard>Add to cart</ButtonCard> */}
            {isAdmin && <Admin phone={phone} />}
          </Card>
        ))}
      </Gallery>
    </div>
  );
};
