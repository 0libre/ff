import React from 'react';
import { shallow } from 'enzyme';
import { LoadingSpinner } from './loadingSpinner';

describe('LoadingSpinner', () => {
  it('LoadingSpinner should not have loading class when loading is false', () => {
    const spinner = shallow(<LoadingSpinner
      className='Testing'
      loading={false}
      src='placeHolderURL'
      />);
    const { className } = spinner.find('img').props()
    expect(className).toBe('Testing');
  });
  it('LoadingSpinner should have loading class when loading is true', () => {
    const spinner = shallow(<LoadingSpinner
      className='Testing'
      loading={true}
      src='placeHolderURL'
      />);
    const { className } = spinner.find('img').props()
    expect(className).toBe('Testing loading');
  });
});

