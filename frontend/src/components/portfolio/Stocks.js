import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStocks } from '../../actions/stocks'
import { composeWithDevTools } from 'redux-devtools-extension';

export const Stocks = (props) => {

    useEffect(() => {
        props.getStocks();
    }, [])

    return (
        <Fragment>
            <div className="flex  justify-around items-stretch ">
                <div className="bg-lblue-700 flex-initial rounded-l">
                    <div className="p-8">
                        <h1 className='text-5xl'>Stock 1: $2500</h1>
                        <h1 className='text-5xl'>Stock 2: $2200</h1>
                        <h1 className='text-5xl'>Stock 3: $2500</h1>
                        <h1 className='text-5xl'>Stock 4: $2500</h1>
                        <h1 className='text-5xl'>Stock 5: $2500</h1>
                        <h1 className='text-5xl'>Stock 6: $2500</h1>
                    </div>
                </div>
                <div className="bg-lblue-700 flex-initial rounded-l">
                    <div className="p-8">
                        <h1 className='text-5xl'>Stock 1: $2500</h1>
                        <h1 className='text-5xl'>Stock 2: $2500</h1>
                        <h1 className='text-5xl'>Stock 3: $2500</h1>
                        <h1 className='text-5xl'>Stock 4: $2500</h1>
                        <h1 className='text-5xl'>Stock 5: $2500</h1>
                        <h1 className='text-5xl'>Stock 6: $2500</h1>
                    </div>
                </div>
            </div>
            <h1>Portfolios:</h1>
                <table className="table-auto bg-indigo-600">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Funds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.stocks.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.id}</td>
                                <td>{stock.user}</td>
                                <td>{stock.email}</td>
                                <td>{stock.funds}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </Fragment>
    );
}

Stocks.propTypes = {
    stocks: PropTypes.array.isRequired
};



const mapStateToProps = state => ({
    stocks: state.stocks.stocks
})
export default connect(mapStateToProps, { getStocks })(Stocks);
