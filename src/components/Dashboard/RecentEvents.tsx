import { Timeline } from 'antd';

const RecentEventsComponent = ({ events }: {
  events: any
}) => {
  return (
    <div
    className='bg-slate-50 rounded-lg hover:shadow-xl p-4'
    >

    <Timeline>
      {events.map((event: any, index: number) => (
        <Timeline.Item key={index} color="red">
          <p>{event.service_name} - {event.error_message}</p>
          <p>{event.timestamp}</p>
        </Timeline.Item>
      ))}
    </Timeline>
      </div>
  );
};

export default RecentEventsComponent;