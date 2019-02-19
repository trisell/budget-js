import React from 'react';
import { shallow } from 'enzyme';
import TopMenu from '../topMenu';

const testComponent = () => {
  return (
    <div>Test</div>
  )
}

const TopMenuTest = TopMenu(testComponent);

const wrapper = shallow(
  <TopMenuTest />
);



describe('Menu Tests', () => {
  it('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot;
  });

  it('should have a menu', () => {
    expect(wrapper.find('.navbar').length).toEqual(1);
  })

  it('should have nav items', () => {
    expect(wrapper.find('.nav-item').length).toEqual(4);
  });

  it('should have dropdowns', () => {
    expect(wrapper.find('.dropdown').length).toEqual(2);
  });

  it('Should have 2 account dropdowns', () => {
    expect(wrapper.find("[aria-labelledby='navbarAccountsDropdown']").children().find('.dropdown-item').length).toEqual(2);
  });

  it('SHould have a dropdown', () => {
    wrapper.find("[aria-labelledby='navbarAccountsDropdown']").children().find('.dropdown-item').forEach((node) => {
    expect(node.hasClass('Link'));

    })
  })

  it('Should have 1 Transaction dropdown', () => {
    wrapper.find('[aria-labelledby="navbarTransactionsDropdown"]').children().find('.dropdown-item').forEach((node) => {
      expect(node.hasClass('Link'));
    })

  })
})