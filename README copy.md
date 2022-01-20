# createalarm
This project is only example the form to create alarm using cloudwatch with boto3

This Python example shows you how to:

* Get basic information about your CloudWatch alarms

* Create and delete a CloudWatch alarm

The Scenario
============

An alarm watches a single metric over a time period you specify, and performs one or more actions 
based on the value of the metric relative to a given threshold over a number of time periods.

In this example, Python code is used to create alarms in CloudWatch. The code 
uses the uses AWS SDK for Python to create alarms using these methods of the AWS.CloudWatch client class:

* `paginate(StateValue='INSUFFICIENT_DATA') <https://boto3.readthedocs.io/en/latest/reference/services/cloudwatch.html#CloudWatch.Client.paginate>`_.

* `put_metric_alarm <https://boto3.readthedocs.io/en/latest/reference/services/cloudwatch.html#CloudWatch.Client.put_metric_alarm>`_.

* `delete_alarms <https://boto3.readthedocs.io/en/latest/reference/services/cloudwatch.html#CloudWatch.Client.delete_alarms>`_.

For more information about CloudWatch alarms, see `Creating Amazon CloudWatch Alarms <http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html>`_ 
in the *Amazon CloudWatch User Guide*.

All the example code for the Amazon Web Services (AWS) SDK for Python is available `here on GitHub <https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/python/example_code>`_.

Prerequisite Task
=================

To set up and run this example, you must first configure your AWS credentials, as described in :doc:`quickstart`.

Describe Alarms
===============

The example below shows how to:
 
* List metric alarms for insufficient data using 
  `paginate(StateValue='INSUFFICIENT_DATA') <https://boto3.readthedocs.io/en/latest/reference/services/cloudwatch.html#CloudWatch.Client.paginate>`_.
 
For more information about paginators see, :doc:`paginators`

Create an Alarm for a CloudWatch Metric Alarm
=============================================

Create or update an alarm and associate it with the specified metric alarm. Optionally, this operation 
can associate one or more Amazon SNS resources with the alarm.

When this operation creates an alarm, the alarm state is immediately set to :code:`INSUFFICIENT_DATA`. 
The alarm is evaluated and its state is set appropriately. Any actions associated with the state are 
then executed.

When you update an existing alarm, its state is left unchanged, but the update completely overwrites 
the previous configuration of the alarm.

The example below shows how to:
 
* Create or update a metric alarm using 
  `put_metric_alarm <https://boto3.readthedocs.io/en/latest/reference/services/cloudwatch.html#CloudWatch.Client.put_metric_alarm>`_.

   
Delete an Alarm
===============

Delete the specified alarms. In the event of an error, no alarms are deleted.

The example below shows how to:
 
* Delete a metric alarm using 
  `delete_alarms <https://boto3.readthedocs.io/en/latest/reference/services/cloudwatch.html#CloudWatch.Client.delete_alarms>`_.
  
