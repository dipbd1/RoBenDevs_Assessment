import React from 'react'
import { Col, Card, Statistic } from 'antd';

import { useAppDispatch } from '../../store/hooks';
import { fetchServiceLog } from '../../store/Services/serviceThunks';

const { Meta } = Card;

const ServiceStatComponent = (props: any) => {
  const { data } = props

  const dispatch = useAppDispatch();

  const handleClick = (service: any) => {
    dispatch(fetchServiceLog(service))
  }

  return (
    <>
      {data.map((service: any) => {
        return (
          <Col key={service.key} className="gutter-row" span={6}>
            <Card
              onClick={() => handleClick(service)}
              hoverable
              style={{ width: 240 }}>
              <Meta title={service.service_name} className='pb-4 underline' />
              <Statistic title="CPU Usage" value={service.cpu_usage} />
              <Statistic title="Memory Usage" value={service.memory_usage} />
              <Statistic title="Response Time" value={service.response_time} />
              <Statistic title="Error Rate" value={service.error_rate} />
              <Statistic title="Status" value={service.status} />
            </Card>
          </Col>
        )
      }
      )}
    </>
  )
}

export default ServiceStatComponent