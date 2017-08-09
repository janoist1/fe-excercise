import { shallow } from 'enzyme';
import React from 'react';
import * as api from '../api';
import App from './App';
import { data as mockData } from '../../data/ldb.json';


describe('<App />', () => {
  it('renders loading', () => {
    const component = shallow(<App />);

    expect(component.html()).toMatchSnapshot();
  });

  it('renders loaded app', () => {
    const component = shallow(<App />);

    component.instance().setState({ data: mockData });

    expect(component.html()).toMatchSnapshot();
  });

  it('calls api on mount', done => {
    api['fetchServiceUpdates'] = jest.fn(() => Promise.resolve(mockData));

    const component = shallow(<App />);

    component.instance().componentDidMount();

    process.nextTick(() => {
      expect(api.fetchServiceUpdates.mock.calls.length).toBe(1);

      done();
    });
  });
});
