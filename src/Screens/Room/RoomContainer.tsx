import React from 'react';
import Room from './Room';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/Navigation';
import { RootScreens } from '..';
import { NotiHeader } from './../../Components/HeaderComponent';

type RoomScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ROOM
>;

export const RoomContainer = () => {
  return (
    <>
      {/* <NotiHeader title="Phòng trọ của bạn" /> */}
      <Room />
    </>
  );
};
