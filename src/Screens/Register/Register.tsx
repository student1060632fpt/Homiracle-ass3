import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { RootScreens } from "../index";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleRegister = () => {
    // Thực hiện xử lý đăng ký ở đây
    console.log(`Email: ${email}, Full Name: ${fullName}, Password: ${password}, Confirm Password: ${confirmPassword}, Agreement: ${isChecked}`);
  };

  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={(text) => setEmail(text)}
      value={email}
    />

    <TextInput
      style={styles.input}
      placeholder="Họ và Tên"
      onChangeText={(text) => setFullName(text)}
      value={fullName}
    />

    <TextInput
      style={styles.input}
      placeholder="Mật khẩu"
      secureTextEntry
      onChangeText={(text) => setPassword(text)}
      value={password}
    />

    <TextInput
      style={styles.input}
      placeholder="Xác nhận mật khẩu"
      secureTextEntry
      onChangeText={(text) => setConfirmPassword(text)}
      value={confirmPassword}
    />

    {/* <Checkox
      title="Tôi đồng ý với điều khoản và chính sách bảo mật"
      checked={isChecked}
      onPress={() => setChecked(!isChecked)}
      checkedColor="#006c49"
    /> */}

    <TouchableOpacity style={styles.button} onPress={handleRegister}>
      <Text style={{ color: '#006c49' }}>Tạo Tài Khoản</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: 250,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#006C49',
    marginTop: 40,
  },
});

export default Register;
