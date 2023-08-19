import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchServiceLog } from './serviceThunks';

import { RootState } from '../index';
import { stat } from 'fs';

export interface Service {
  service_name: string;
  cpu_usage: number;
  memory_usage: number;
  response_time: number;
  error_rate: number;
  key: number;
  status: string;
}

export interface ServiceState {
  services: Service[];
  errors: any[];
  geoStatus: any[];
  serviceFailures: ServiceLog | {};
  status?: 'idle' | 'loading' | 'failed';
  modalOpen?: boolean;
  loading: boolean;
}

const initialState: ServiceState = {
  services: [],
  errors: [],
  geoStatus: [],
  serviceFailures: {},
  loading: false,
};


export type ServiceLog = {
  service_name: string;
  last_failed: string;
  failure_count: number;
  failures: {
    error_message: string;
    timestamp: string;
  }[];
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServiceLog.pending, (state) => {
      state.status = 'loading';
      state.loading = true;
    });
    builder.addCase(fetchServiceLog.fulfilled, (state, action) => {
      state.status = 'idle';
      state.modalOpen = true;
      state.loading = false;
      state.serviceFailures = action.payload as ServiceLog;
    });
  }
});

export const { setServices, closeModal } = servicesSlice.actions;

export const selectServices = (state: RootState) => state.services.services;

export default servicesSlice.reducer;

