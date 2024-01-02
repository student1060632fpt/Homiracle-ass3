import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useAppTheme } from './../../Theme';
import { RadioButton, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const Invoice = () => {
  const theme = useAppTheme();
  const [displayDetail, setDisplayDetail] = React.useState(false);
  const [displayDetailButton, setDisplayDetailButton] =
    React.useState('Xem chi tiết');
  const [value, setValue] = React.useState('momo');
  const navigation = useNavigation();

  const handleDisplayDetail = () => {
    setDisplayDetail(displayDetail => !displayDetail);
    setDisplayDetailButton(displayDetailButton => {
      if (displayDetailButton === 'Xem chi tiết') {
        return 'Thu gọn';
      } else {
        return 'Xem chi tiết';
      }
    });
    console.log(displayDetail);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('Room' as never);
          }}
        />
        <Appbar.Content
          title='Hóa đơn'
          titleStyle={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.primary,
          }}
        />
        <Appbar.Action icon='bell-outline' onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          gap: 12,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: theme.colors.outlineVariant,
            width: '100%',
            padding: 20,
            backgroundColor: theme.colors.surface,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ flexDirection: 'column', gap: 4 }}>
              <Text style={theme.fonts.titleMedium}>Hóa đơn tháng 10/2023</Text>
              <Text>1.500.000đ</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: theme.colors.error }}>Chưa thanh toán</Text>
            </View>
          </View>
          {displayDetail && (
            <View style={{ paddingTop: 20, gap: 12 }}>
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={theme.fonts.titleSmall}>Điện</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>Tiêu thụ</Text>
                  <Text>100 kWh</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>Số tiền</Text>
                  <Text>300.000đ</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={theme.fonts.titleSmall}>Nước</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>Tiêu thụ</Text>
                  <Text>10 m3</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>Số tiền</Text>
                  <Text>300.000đ</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column', gap: 10 }}>
                <Text style={theme.fonts.titleSmall}>Tiền phòng</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>Số tiền</Text>
                  <Text>900.000đ</Text>
                </View>
              </View>
            </View>
          )}
          <View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 20,
              }}
              onPress={handleDisplayDetail}
            >
              <Text style={{ color: theme.colors.outline }}>
                {displayDetailButton}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: theme.colors.outlineVariant,
            width: '100%',
            padding: 20,
            backgroundColor: theme.colors.surface,
          }}
        >
          <Text style={theme.fonts.titleMedium}>
            Chọn phương thức thanh toán
          </Text>
          <View style={{ marginTop: 16 }}>
            <RadioButton.Group
              onValueChange={newValue => setValue(newValue)}
              value={value}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <RadioButton value='momo' />
                <Text style={theme.fonts.titleMedium}>Momo</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <RadioButton value='vnpay' />
                <Text style={theme.fonts.titleMedium}>VNPay</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <RadioButton value='ocb' />
                <Text style={theme.fonts.titleMedium}>
                  Thẻ ngân hàng nội địa OCB
                </Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View>
          <Button
            buttonColor={theme.colors.primary}
            textColor='white'
            style={{ width: 120 }}
            onPress={() => {}}
          >
            Thanh toán
          </Button>
        </View>
      </View>
    </View>
  );
};
