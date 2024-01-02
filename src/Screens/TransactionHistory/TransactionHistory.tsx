import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useAppTheme } from './../../Theme';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'native-base';

const historyData = [
  {
    id: 1,
    month: 'Tháng 10/2021',
    total: 1500000,
    status: 'Chưa thanh toán',
    detail: [
      {
        id: 1,
        name: 'Điện',
        consume: 100,
        unit: 'kWh',
        price: 300000,
      },
      {
        id: 2,
        name: 'Nước',
        consume: 10,
        unit: 'm3',
        price: 300000,
      },
      {
        id: 3,
        name: 'Tiền phòng',
        consume: 1,
        unit: '',
        price: 900000,
      },
    ],
  },
  {
    id: 2,
    month: 'Tháng 9/2021',
    total: 1500000,
    status: 'Đã thanh toán',
    detail: [
      {
        id: 1,
        name: 'Điện',
        consume: 100,
        unit: 'kWh',
        price: 300000,
      },
      {
        id: 2,
        name: 'Nước',
        consume: 10,
        price: 300000,
      },
      {
        id: 3,
        name: 'Tiền phòng',
        consume: 1,
        unit: '',
        price: 900000,
      },
    ],
  },
  {
    id: 3,
    month: 'Tháng 8/2021',
    total: 1500000,
    status: 'Đã thanh toán',
    detail: [
      {
        id: 1,
        name: 'Điện',
        consume: 100,
        unit: 'kWh',
        price: 300000,
      },
      {
        id: 2,
        name: 'Nước',
        consume: 10,
        unit: 'm3',
        price: 300000,
      },
      {
        id: 3,
        name: 'Tiền phòng',
        consume: 1,
        unit: '',
        price: 900000,
      },
    ],
  },
];

type DetailsVisibilityState = {
  [key: number]: boolean;
};

export const TransactionHistory = () => {
  const theme = useAppTheme();
  const [detailsVisibility, setDetailsVisibility] =
    React.useState<DetailsVisibilityState>({});

  const toggleDetailVisibility = (id: number) => {
    setDetailsVisibility(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    console.log(detailsVisibility);
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content
          title='Lịch sử giao dịch'
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
        {historyData.map(item => (
          <View
            key={item.id}
            style={{
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 12,
              gap: 12,
            }}
          >
            <Text
              style={[
                theme.fonts.titleMedium,
                {
                  alignSelf: 'flex-start',
                },
              ]}
            >
              {item.month}
            </Text>
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
              <View style={{ flexDirection: 'column', gap: 4 }}>
                <Text style={theme.fonts.titleMedium}>
                  Hóa đơn {item.month}
                </Text>
                <Text>{item.total.toLocaleString('vi-VN')}đ</Text>
              </View>
              {detailsVisibility[item.id] &&
                item.detail.map(detail => (
                  <View key={detail.id} style={{ paddingTop: 20, gap: 12 }}>
                    <View style={{ flexDirection: 'column', gap: 10 }}>
                      <Text style={theme.fonts.titleSmall}>{detail.name}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text>Tiêu thụ</Text>
                        <Text>
                          {detail.consume} {detail.unit}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text>Số tiền</Text>
                        <Text>{detail.price.toLocaleString('vi-VN')}đ</Text>
                      </View>
                    </View>
                  </View>
                ))}
              <View>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}
                  onPress={() => {
                    toggleDetailVisibility(item.id);
                  }}
                >
                  <Text style={{ color: theme.colors.outline }}>
                    {detailsVisibility[item.id] ? 'Thu gọn' : 'Xem chi tiết'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
