import * as React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import IconEntypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-paper';
import theme, { useAppTheme } from './../../Theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const Room = () => {
  const theme = useAppTheme();

  return (
    <View style={styles.content}>
      
      <View style={styles.buildingBlocksmenuButton}>
        <View style={[styles.stateLayer, styles.infoParentFlexBox]}>
          <Text style={styles.labelText}>Sao Mai - 101</Text>
          <IconEntypo
            name='triangle-down'
            color={theme.colors.onSurfaceVariant}
            size={20}
            style={{ marginHorizontal: 5 }}
          />
        </View>
      </View>
      <View style={[styles.cardInfoOptionParent, styles.infoParentFlexBox]}>
        <Pressable style={styles.cardInfoOption} onPress={() => {}}>
          <View style={styles.cardChildShadowBox} />
          <View style={[styles.iconInfoParent]}>
            <Image
              style={styles.tinyImage}
              source={require('./../../static/icon/info.png')}
            />
            <Text style={styles.thngTin}>Thông tin</Text>
          </View>
        </Pressable>
        <Pressable style={styles.cardShadowBox} onPress={() => {}}>
          <View style={styles.cardChildShadowBox} />
          <View style={[styles.iconInfoParent]}>
            <Image
              style={styles.tinyImage}
              source={require('./../../static/icon/bill.png')}
            />
            <Text style={[styles.haN, styles.haNTypo]}>Hóa đơn</Text>
          </View>
        </Pressable>
        <Pressable style={styles.cardShadowBox} onPress={() => {}}>
          <View style={styles.cardChildShadowBox} />
          <View style={[styles.iconInfoParent]}>
            <Image
              style={styles.tinyImage}
              source={require('./../../static/icon/contract.png')}
            />
            <Text style={[styles.hpNg, styles.haNTypo]}>Hợp đồng</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const Padding = {
  p_5xs: 8,
  p_3xs: 10,
  p_9xs: 4,
};
const Border = {
  br_base: 16,
  br_81xl: 100,
};

const styles = StyleSheet.create({
 
  tinyImage: {
    width: 40,
    height: 40,
  },
  infoParentFlexBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },

  haNTypo: {
    marginTop: 4,
    height: 24,
    display: 'flex',
    color: 'black',
    lineHeight: 24,
    fontSize: theme.fonts.bodyLarge.fontSize,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: theme.fonts.labelLarge.fontSize,
    lineHeight: 20,
    fontWeight: '500',
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
  },

  stateLayer: {
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_3xs,
    borderRadius: Border.br_base,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  buildingBlocksmenuButton: {
    borderStyle: 'solid',
    alignItems: 'flex-start',
  },
  cardChildShadowBox: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_base,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
  },

  thngTin: {
    height: 24,
    display: 'flex',
    color: 'black',
    lineHeight: 24,
    fontSize: theme.fonts.bodyLarge.fontSize,
    width: 69,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInfoParent: {
    padding: 15,
    height: 100,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfoOption: {
    height: 100,
    width: 100,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },

  haN: {
    width: 69,
  },

  cardShadowBox: {
    marginLeft: 16,
    height: 100,
    width: 100,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },

  hpNg: {
    width: 78,
  },

  cardInfoOptionParent: {
    marginTop: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default Room;
