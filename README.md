# Cloud-Based Smart Home System

A cloud-based smart home system using AWS IoT and serverless architecture.

## Project Overview

This project implements a scalable smart home system that connects and manages IoT devices through the cloud. The system supports real-time device control, automation, data storage, monitoring, and notifications.

## AWS Services Used

- AWS IoT Core – connects smart home devices using MQTT
- AWS Lambda – processes commands and backend logic
- Amazon S3 – stores device logs and data
- Amazon DynamoDB – stores device state
- Amazon SNS – sends notifications and alerts
- Amazon CloudWatch – monitoring and performance tracking
- Amazon EventBridge – event-driven automation and routing

## Smart Home Devices

- Smart Thermostat
- Smart Lights
- Security Camera

## Key Features

- Remote device management
- Real-time device control with low latency
- Rule-based automation
- Device data storage
- Notifications and alerts
- Role-based access control
- Scalable cloud architecture
- Security and GDPR-focused deployment

## Architecture

The system uses AWS IoT Core and MQTT to connect smart home devices with the cloud. AWS Lambda processes commands, while S3 and DynamoDB provide data and state storage. SNS provides notifications, CloudWatch provides monitoring, and EventBridge supports event-driven processing.

## Project Goal

The goal is to overcome the scalability, reliability, and performance limitations of traditional local smart home hubs by using a scalable AWS cloud architecture.
