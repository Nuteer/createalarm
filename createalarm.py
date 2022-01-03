import boto3

# create cloudwatch client
cloudwatch = boto3.client('cloudwatch')

# Create alarm for CPU
cloudwatch.put_metric_alarm(
	AlarmName='web_server_CPU_Utilization',
	ComparisonOperator='GreaterThanThreshold',
	EvaluationPeriods=1,
    MetricName='CPUUtilization',
    Namespace='AWS/EC2',
    Period=60,
    Statistic='Average',
    Threshold=70.0,
    ActionsEnabled=False,
    AlarmDescription='Alarm when server CPU exceeds 70%',
    Dimensions=[
        {
            'Name': 'InstanceId',   # Name of the dimension
            'Value': 'INSTANCE_ID'  # replace with your instance id
        },
    ],
    # TODO: Add more dimensions
    Unit='Percent',
)