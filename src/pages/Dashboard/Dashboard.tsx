import React, { useEffect } from 'react';
import { Col, Layout, Row, Typography, Modal, Timeline } from 'antd';

import { ServiceStatsData, ServiceErrorsData, GeoStatusData } from "../../data"

import ServiceStatComponent from "../../components/Dashboard/ServiceStats"
import RecentEventsComponent from '../../components/Dashboard/RecentEvents';
import GeoStatsComponent from '../../components/Dashboard/GeoStats';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeModal } from '../../store/Services/servicesSlice';
import { ServiceLog } from '../../store/Services/servicesSlice';

const { Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {

  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector((state) => state.services.modalOpen);
  const serviceFailureData: ServiceLog | {} = useAppSelector((state) => state.services.serviceFailures);


  const handleCancel = () => {
    dispatch(closeModal());
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  };

  useEffect(() => {
    console.log("serviceFailureData", serviceFailureData)
  }, [serviceFailureData])

  return (
    <Content className="site-layout" style={{ padding: '0 50px' }}>


      <Modal title="Basic Modal" open={modalOpen} onCancel={handleCancel}>
        <Timeline>
          {Object.keys(serviceFailureData).length > 0 && (serviceFailureData as ServiceLog).failures?.map((event: any, index: number) => (
            <Timeline.Item key={index} color="red">
              <p>{event.error_message}</p>
              <p>{formatDate(event.timestamp)}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </Modal>


      <Title level={2}>Dashboard for OmniKick</Title>

      <Row align={"middle"} justify={"center"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ padding: 24, minHeight: 380 }
        }
      >
        <GeoStatsComponent data={GeoStatusData} />
      </Row>

      <Title level={4}>Service Stats</Title>

      <Row align={"middle"} justify={"center"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ padding: 24, minHeight: 380 }
        }
      >
        <ServiceStatComponent data={ServiceStatsData} />
      </Row>

      {/* recent errors */}
      <Title level={4}>Recent Errors</Title>

      <Row align={"stretch"} justify={"start"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ padding: 24, minHeight: 380 }
        }
      >
        <Col span={12}>
          <RecentEventsComponent events={ServiceErrorsData} />
        </Col>
      </Row>



    </Content>
  );
}

export default Dashboard;