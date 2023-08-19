import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServiceLogMock } from "./servicesThunkActions";

import { Service } from "./servicesSlice";


export const fetchServiceLog = createAsyncThunk(
  'services/fetchServiceLog',
  async (service: Service) => {
    const data = await fetchServiceLogMock(service.service_name);
    return data;
  })
