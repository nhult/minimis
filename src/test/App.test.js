import App from '../components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').text()).toBe('Whalecum');
    expect(wrapper).toMatchSnapshot;
  });
});
