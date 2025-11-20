def lambda_handler(event, context):
    print("Python Lambda invoked!")
    return {
        "statusCode": 200,
        "body": "Hello from Python Lambda!"
    }
