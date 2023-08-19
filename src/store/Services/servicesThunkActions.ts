import _data from '../../data/Cron Jobs.json';

export const fetchServiceLogMock = async (service_name: any) => {
  const MockReq = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(_data);
    }, 1000);
  }
  );
  const data = await MockReq;
  return data;

}