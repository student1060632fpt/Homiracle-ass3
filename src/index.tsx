import React from "react";
import * as Localization from "expo-localization";
import { i18n, Language } from "./Localization";
import { NativeBaseProvider } from "native-base";
import { store, persistor } from "./Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import theme from "./Theme";
import { PaperProvider } from "react-native-paper";


// language
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;


export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PaperProvider  theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
          </PersistGate>
        </PaperProvider>
      </Provider>
    </NativeBaseProvider>
  );
}
