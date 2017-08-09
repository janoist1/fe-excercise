import { shallow } from 'enzyme';
import React from 'react';
import CallingPoint from './CallingPoint';

describe('<CallingPoint />', () => {
  it('renders all the variations correctly', () => {
    const renderComponent = props => shallow(<CallingPoint {...props} />);

    expect(
      renderComponent({
        hasDeparted: false,
        isTrainHere: false,
        station: 'Sevenoaks',
        scheduledAt: '10:00',
        estimatedAt: 'On time',
        isOrigin: false,
        isDestination: false
      }).html()
    ).toMatchSnapshot();

    expect(
      renderComponent({
        hasDeparted: true,
        isTrainHere: false,
        station: 'Sevenoaks',
        scheduledAt: '10:00',
        estimatedAt: 'On time',
        isOrigin: false,
        isDestination: false
      }).html()
    ).toMatchSnapshot();

    expect(
      renderComponent({
        hasDeparted: false,
        isTrainHere: true,
        station: 'Sevenoaks',
        scheduledAt: '10:00',
        estimatedAt: 'On time',
        isOrigin: false,
        isDestination: false
      }).html()
    ).toMatchSnapshot();

    expect(
      renderComponent({
        hasDeparted: true,
        isTrainHere: true,
        station: 'Sevenoaks',
        scheduledAt: '10:00',
        estimatedAt: 'On time',
        isOrigin: false,
        isDestination: false
      }).html()
    ).toMatchSnapshot();

    expect(
      renderComponent({
        hasDeparted: false,
        isTrainHere: false,
        station: 'Sevenoaks',
        scheduledAt: '10:00',
        estimatedAt: 'On time',
        isOrigin: true,
        isDestination: false
      }).html()
    ).toMatchSnapshot();

    expect(
      renderComponent({
        hasDeparted: false,
        isTrainHere: false,
        station: 'Sevenoaks',
        scheduledAt: '10:00',
        estimatedAt: 'On time',
        isOrigin: false,
        isDestination: true
      }).html()
    ).toMatchSnapshot();
  });
});
