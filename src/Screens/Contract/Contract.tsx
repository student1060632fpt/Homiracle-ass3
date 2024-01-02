import React from 'react';
import { View, Text } from 'react-native';
import { useAppTheme } from '../../Theme';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const Contract = () => {
  const theme = useAppTheme();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('Room' as never);
          }}
        />
        <Appbar.Content
          title='Hợp đồng thuê trọ'
          titleStyle={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.primary,
          }}
        />
        <Appbar.Action icon='bell-outline' onPress={() => {}} />
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            gap: 24,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
        >
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Bên cho thuê</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Ông/Bà</Text>
              <Text style={theme.fonts.bodyMedium}>Trần Thị A</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Số điện thoại</Text>
              <Text style={theme.fonts.bodyMedium}>0123456789</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Số CCCD</Text>
              <Text style={theme.fonts.bodyMedium}>058300001234</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={[theme.fonts.bodyMedium, { flex: 1 }]}>Địa chỉ</Text>
              <Text style={[theme.fonts.bodyMedium, { flex: 1, textAlign: 'right' }]}>
                KTX Khu A, Đông Hòa, Dĩ An, Bình Dương
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Bên thuê</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Ông/Bà</Text>
              <Text style={theme.fonts.bodyMedium}>Trần Thị B</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Số điện thoại</Text>
              <Text style={theme.fonts.bodyMedium}>0123456789</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Số CCCD</Text>
              <Text style={theme.fonts.bodyMedium}>058300001234</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Thông tin cho thuê</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Phòng</Text>
              <Text style={theme.fonts.bodyMedium}>101</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Tiền phòng</Text>
              <Text style={theme.fonts.bodyMedium}>{(900000).toLocaleString('vi-VN')}đ</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Tiền cọc</Text>
              <Text style={theme.fonts.bodyMedium}>{(900000).toLocaleString('vi-VN')}đ</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Tiền điện</Text>
              <Text style={theme.fonts.bodyMedium}>{(3000).toLocaleString('vi-VN')}đ/kWh</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Tiền nước</Text>
              <Text style={theme.fonts.bodyMedium}>{(10000).toLocaleString('vi-VN')}đ/m3</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Kỳ thanh toán tiền phòng</Text>
              <Text style={theme.fonts.bodyMedium}>1 tháng/lần</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Ngày thanh toán</Text>
              <Text style={theme.fonts.bodyMedium}>ngày 5 hàng tháng</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Trách nhiệm bên A</Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Trách nhiệm bên B</Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Điều khoản chung</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
