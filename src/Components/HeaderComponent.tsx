import * as React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useAppTheme } from './../Theme';
export const NotiHeader = (props:{title?: string}) => {
  const theme = useAppTheme();
  return (
    <View style={styles.topBar}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: theme.colors.primary }}>
        {props.title}
      </Text>
      <Icon name='notifications-outline' color={theme.colors.primary} size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom:10
  },
})