import itertools
import backtrader as bt
from datetime import datetime

class RSI_Strategy(bt.Strategy):
    params = (
        ('overbought', 70),
        ('oversold', 30),
        ('rsi_period', 14),
        ('min_duration', 4),
        ('max_duration', 100),
    )

    def __init__(self):
        self.rsi = bt.indicators.RSI(self.data, period=self.params.rsi_period)

    def next(self):
        longOverbought = sum(self.rsi[i] > self.params.overbought for i in range(-self.params.max_duration, 0)) >= self.params.min_duration
        longOversold = sum(self.rsi[i] < self.params.oversold for i in range(-self.params.max_duration, 0)) >= self.params.min_duration

        buySignal = bt.ind.CrossUp(self.rsi, self.params.oversold) and longOversold
        sellSignal = bt.ind.CrossDown(self.rsi, self.params.overbought) and longOverbought

        if buySignal:
            self.buy()

        if sellSignal:
            self.sell()

def simulate_trading_strategy(overbought, oversold, rsi_period, min_duration, max_duration):
    cerebro = bt.Cerebro()
    cerebro.addstrategy(RSI_Strategy, overbought=overbought, oversold=oversold, rsi_period=rsi_period,
                        min_duration=min_duration, max_duration=max_duration)

    # Define your historical data source and load it into a data feed
    # data = bt.feeds.GenericCSVData(
    #     dataname='c:\Python311\IBM.csv',
    #     fromdate=datetime(2010, 1, 1),
    #     todate=datetime(2021, 12, 31),
    #     nullvalue=0.0,
    #     dtformat=('%Y-%m-%d'),
    #     datetime=0,
    #     open=1,
    #     high=2,
    #     low=3,
    #     close=4,
    #     volume=5,
    #     openinterest=-1
    # )
    data = bt.feeds.GenericCSVData(
    dataname='c:\Python311\IBM.csv',
    fromdate=datetime(2010, 1, 1),
    todate=datetime(2021, 12, 31),
    nullvalue=0.0,
    dtformat=('%Y-%m-%d %H:%M:%S'),
    datetime=0,
    open=1,
    high=2,
    low=3,
    close=4,
    volume=5,
    openinterest=-1
)
    cerebro.adddata(data)

    # Run the backtest
    cerebro.run()

    # Calculate your performance metric
    performance = cerebro.broker.getvalue()

    return performance

# Define parameter value ranges
overbought_range = range(60, 85, 5)
oversold_range = range(20, 45, 5)
rsi_period_range = range(10, 22, 2)
min_duration_range = range(2, 7)
max_duration_range = range(50, 161, 10)

best_performance = 0
best_parameters = {}

# Iterate over all combinations of parameter values
for overbought, oversold, rsi_period, min_duration, max_duration in itertools.product(
    overbought_range,
    oversold_range,
    rsi_period_range,
    min_duration_range,
    max_duration_range,
):
    # Simulate trading strategy and calculate performance metric
    performance = simulate_trading_strategy(overbought, oversold, rsi_period, min_duration, max_duration)


    # Update best performance and parameters if current combination is better
    if performance > best_performance:
        best_performance = performance
        best_parameters = {
            'overbought': overbought,
            'oversold': oversold,
            'rsi_period': rsi_period,
            'min_duration': min_duration,
            'max_duration': max_duration,
        }

# Output the best parameters and their corresponding performance metric
print("Best Parameters:", best_parameters)
print("Best Performance:", best_performance)