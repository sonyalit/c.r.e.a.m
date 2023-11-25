### c.r.e.a.m. is a personal expense tracker developed with react/effector on the client and nest on the server.
It was inspired by the tutorial on this [youtube channel](https://www.youtube.com/watch?v=TntnOmZ-yp8).
Since I am sort of a investor myself I planned to play with Tinkoff Invest API. gRPC protocol was too much for me, so I used those REST methods to get some portfolio stats. For now you can see currencis and shares info. I will add bonds and etfs soon.

If you want to do some mental damage and calculate your expenses please follow these steps:

1. create .env with your MongoDb DATABASE_URL and DATABASE_NAME in server/cash
2. create .env with your REACT_APP_TINKOFF_TOKEN and REACT_APP_TINKOFF_ACCOUNT_ID (the broker one) in client/cash
3. docker-compose build
4. docker-compose up



PS. Barbie core is not over yet
