import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { server } from '../server/index'

describe('Based App test suite', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Backend test suite', () => {
  it('Using correct data - should return 200 status', async () => {
    const { status } = await fetch('http://localhost:3001/api/movies?filter=trending')
    expect(status).toBe(200)
  });
  it('Using faulty filter param - should return 404 status', async () => {
    const { status } = await fetch('http://localhost:3001/api/movies?filter=other')
    expect(status).toBe(404)
  });
  it('Using faulty path - should return 404 status', async () => {
    const { status } = await fetch('http://localhost:3001/api/movies?filter=other')
    expect(status).toBe(404)
  });
});
