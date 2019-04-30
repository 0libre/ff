import React from 'react';
import { shallow } from 'enzyme';
import { Table } from './Table';

describe('Table component', () => {
  it('Table renders without crashing', () => {
    shallow(<Table />);
  });
});
