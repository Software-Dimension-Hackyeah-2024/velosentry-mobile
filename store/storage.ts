import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  getItem: async (name: string) => {
    const item = await AsyncStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any) => {
    const stringifiedValue = JSON.stringify(value);
    return AsyncStorage.setItem(name, stringifiedValue);
  },
  removeItem: (name: string) => {
    return AsyncStorage.removeItem(name);
  },
};
