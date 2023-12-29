import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Login from "../../static/image/login";
import Logo from "../../static/image/logo";
import { useNavigation } from '@react-navigation/native';
import { RootScreens } from "../index";

export const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // console.log(`Email: ${email}, Password: ${password}`);
    navigation.navigate(RootScreens.REGISTER);
  };

  return (
    <View style={styles.container}>
      <Login />
      <View style={styles.container1}>
        <View style={[styles.leftContainer, { flex: 8}]}>
          <Text style={styles.sloganText}>Quản lý căn hộ của bạn ở bất cứ đâu</Text>
        </View>
        <View style={[styles.rightContainer, { flex: 5 }]}>
          <Logo />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: '#006c49' }}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerLink}>
        <Text style={{ color: '#434343' }}>Bạn chưa có tài khoản? </Text>
        <Text style={{ color: '#006c49' }}>Đăng ký ngay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordLink}>
        <Text style={{ color: '#434343', fontSize: 14 }}>Quên mật khẩu?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  logo: {
    width: 148,
    height: 148,
    paddingRight: 5
  },
  sloganText: {
    color: '#434343',
    paddingLeft: 30,
    paddingTop: 20,
    fontSize: 20
  },
  input: {
    width: 250,
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
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
  registerLink: {
    marginTop: 10,
    flexDirection: 'row',
  },
  forgotPasswordLink: {
    marginTop: 10,
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  rightContainer: {
    alignItems: 'center',
    paddingRight: 20,
  },
  container1: {
    flexDirection: 'row',
    marginTop: 25
  },
});

export default LogIn;
