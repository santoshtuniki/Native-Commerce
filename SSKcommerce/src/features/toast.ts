// module imports
import Toast from 'react-native-toast-message';

// util imports
import { TOAST } from '../utils';

export const showToast = (message: string, type: string = TOAST.INFO) => {
    Toast.show({
        type,
        text1: message,
    });
};
