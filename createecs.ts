import ec2 = require('@aws-cdk/aws-ec2');
import { ContainerDefinition } from '@aws-cdk/aws-ecs';
import ecs = require('@aws-cdk/aws-ecs');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import cdk = require('@aws-cdk/core');

class MyEcsConstructStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // The code that defines your stack goes here
        const vpc = new ec2.Vpc(this, 'VPC');
        // Create a cluster
        const cluster = new ecs.Cluster(this, 'Cluster', {
            vpc: vpc
        });
        // Create a load balancer
        const taskDefinition = new ecs.FargateTaskDefinition(this, 'TaskDef', {
            cpu: 256,
            memoryLimitMiB: 512
        });
        // Create a container definition
        const containerDefinition = new ContainerDefinition(this, 'ContainerDef', {
            taskDefinition: taskDefinition,
            image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
            memoryLimitMiB: 512,
            cpu: 256
        });
        
        // Create a service
        const service = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'Service', {
            cluster: cluster,
            taskDefinition: taskDefinition,
            desiredCount: 2,
            publicLoadBalancer: true
        });
    }
    
}

// snippet-end:[ecs.typescript.createecs]
const app = new cdk.App();
new MyEcsConstructStack(app, 'MyEcsConstructStack');
app.synth();