import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { ping } from '@containers/App/actions';
import Card from '@components/Card';

import { selectStep, selectInfo, selectPrice, selectAdd } from './selectors';

import style from './style.module.scss'

const Home = ({step, info, price, add}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Card step={step} info={info} price={price} add={add}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  info: selectInfo,
  price: selectPrice,
  add: selectAdd
})

export default connect(mapStateToProps)(Home);
