import React, { useState, useEffect } from 'react';
import { useLazyGetUserQuery } from '../../Services';
import { View } from 'native-base';

export const ProfileConatiner = () => {
  const [userId, setUserId] = useState('9');

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <View>
    
  </View>;
};
