export const ServiceStatsData = [
  {
    "service_name": "Email",
    "cpu_usage": 0.45,
    "memory_usage": 0.67,
    "response_time": 0.12,
    "error_rate": 0.03,
    key: 1,
    status: "up"
  },
  {
    "service_name": "Push Notification",
    "cpu_usage": 0.32,
    "memory_usage": 0.54,
    "response_time": 0.15,
    "error_rate": 0.05,
    key: 2,
    status: "up"
  },
  {
    "service_name": "Cron Jobs",
    "cpu_usage": 0.51,
    "memory_usage": 0.72,
    "response_time": 0.18,
    "error_rate": 0.04,
    key: 3,
    status: "up"
  }
]

export const ServiceErrorsData = [
  {
    service_name: "AuthService",
    error_message: "Invalid credentials",
    timestamp: "2021-10-01T10:30:00Z"
  },
  {
    service_name: "PaymentService",
    error_message: "Payment failed",
    timestamp: "2021-10-02T14:45:00Z"
  },
];

type GeoStatus = {
  coordinate: [number, number],
  status: string
}

export const GeoStatusData: GeoStatus[] = [
  { coordinate: [-122.4194, 37.7749], status: "OK" }, // San Francisco, USA
  { coordinate: [-118.2437, 34.0522], status: "Warning" }, // Los Angeles, USA
  { coordinate: [-74.0060, 40.7128], status: "Error" }, // New York City, USA
  { coordinate: [-0.1278, 51.5074], status: "OK" }, // London, UK
  { coordinate: [-3.1883, 55.9533,], status: "Warning" }, // Edinburgh, UK
  { coordinate: [-2.5879, 51.4545,], status: "Error" }, // Bristol, UK
];


export const ServiceFailuresData = [{
  service_name: "Cron Jobs",
  last_failed: "2021-10-01T10:30:00Z",
  failure_count: 3,
  failure: [
    {
      error_message: "Invalid credentials",
      timestamp: "2021-10-01T10:30:00Z"
    },
    {
      error_message: "Payment failed",
      timestamp: "2021-10-02T14:45:00Z"
    },
    {
      error_message: "Invalid credentials",
      timestamp: "2021-10-03T10:30:00Z"
    },
    {
      error_message: "Payment failed",
      timestamp: "2021-10-04T14:45:00Z"
    },
    {
      error_message: "Invalid credentials",
      timestamp: "2021-10-05T10:30:00Z"
    }
  ]
}
];