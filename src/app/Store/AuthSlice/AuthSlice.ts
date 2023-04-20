import { PayloadAction, createSlice } from 'ngrx-slice';

enum userType {
  'admin',
  'superadmin',
}

export interface CounterState {
  _id: string;
  barangayId?: string;
  accountType?: userType | string;
  fullname?: string;
  email?: string;
  address?: string;
  username?: string;
}

export const initialState: CounterState = {
  _id: '',
  barangayId: '',
  accountType: '',
  fullname: '',
  email: '',
  address: '',
  username: '',
};

export const {
  actions: CounterActions,
  selectors: CounterSelectors,
  ...CounterFeature
} = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthDetails: (state: any, action: PayloadAction<{ value: CounterState }>): any => {
      if (action.value) {
        state = action.value;
      }
    },
  },
});
