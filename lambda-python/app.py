def lambda_handler(event, context):
    print("Python Lambda invoked!")
    return {
        "statusCode": 200,
        "body": "Hello from Python Lambda!"
    }

# ローカル実行用
if __name__ == "__main__":
    fake_event = {"foo": "bar"}
    fake_context = None  # 必要ならダミークラス作る
    res = lambda_handler(fake_event, fake_context)
    print(res)
