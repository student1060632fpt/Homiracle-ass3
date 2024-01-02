import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useAppTheme } from './../../Theme';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const RoomInfo = () => {
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
          title='Thông tin phòng trọ'
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
            <Text style={[theme.fonts.titleMedium]}>Địa chỉ</Text>
            <Text style={[theme.fonts.bodyMedium]}>
              Số 123, đường Phạm Văn Đồng, phường Hiệp Bình Chánh, TP. Thủ Đức,
              TP.HCM
            </Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Thông tin chung</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Diện tích</Text>
              <Text style={theme.fonts.bodyMedium}>20m2</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Giá thuê</Text>
              <Text style={theme.fonts.bodyMedium}>900.000đ</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Điện</Text>
              <Text style={theme.fonts.bodyMedium}>3.000đ/kWh</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Nước</Text>
              <Text style={theme.fonts.bodyMedium}>10.000đ/m3</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Số người đang ở</Text>
              <Text style={theme.fonts.bodyMedium}>3</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={theme.fonts.bodyMedium}>Số người tối đa</Text>
              <Text style={theme.fonts.bodyMedium}>4</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Nội quy</Text>
            <Text style={theme.fonts.bodyMedium}>
              1. Không tự ý dẫn người lạ vào phòng trọ. Nếu muốn dẫn người lạ
              vào phòng trọ, vui lòng báo trước với chủ nhà.
            </Text>
            <Text style={theme.fonts.bodyMedium}>
              2. Không được tự ý sửa chữa, thay đổi cấu trúc phòng trọ.
            </Text>
            <Text style={theme.fonts.bodyMedium}>3. Không nuôi thú cưng.</Text>
            <Text style={theme.fonts.bodyMedium}>
              4. Không gây ồn ào sau 23h đêm
            </Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Thông tin chủ trọ</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              {Array.from({ length: 1 }, (_, index) => (
                <TouchableOpacity
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    backgroundColor: theme.colors.background,
                    borderRadius: 12,
                    marginHorizontal: 4,
                    borderColor: theme.colors.outlineVariant,
                    borderWidth: 1,
                    // maxWidth: '30%',
                    // minWidth: '30%',
                  }}
                >
                  <Text style={{ textAlign: 'center' }}>Nguyễn Văn A</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Thông tin người ở</Text>
            <ScrollView
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
              horizontal={true}
            >
              {Array.from({ length: 4 }, (_, index) => (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    backgroundColor: theme.colors.background,
                    borderRadius: 12,
                    marginHorizontal: 4,
                    borderColor: theme.colors.outlineVariant,
                    borderWidth: 1,
                    // maxWidth: '30%',
                    // minWidth: '30%',
                  }}
                >
                  <Text style={{ textAlign: 'center' }}>Nguyễn Văn A</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'column', gap: 12 }}>
            <Text style={[theme.fonts.titleMedium]}>Nội thất</Text>
            <ScrollView
              contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}
              horizontal={true}
            >
              {['Điều hòa', 'Bếp', 'Tủ lạnh', 'Máy giặt'].map((item, index) => (
                <View
                  key={index}
                  style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    backgroundColor: theme.colors.background,
                    borderRadius: 12,
                    marginHorizontal: 4,
                    borderColor: theme.colors.outlineVariant,
                    borderWidth: 1,
                    // maxWidth: '30%',
                    // minWidth: '30%',
                  }}
                >
                  <Text style={{ textAlign: 'center' }}>{item}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={[theme.fonts.titleMedium]}>Dịch vụ</Text>
          </View>
          <View>
            <Text style={[theme.fonts.titleMedium]}>Mô tả khác</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
