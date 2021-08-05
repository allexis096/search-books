import React from 'react';

import { WelcomeScreen } from '.';
import { renderWithTheme } from '../../utils/renderWithTheme';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));

describe('<Welcome />', () => {
  it('should render the screen', () => {
    const { getByA11yLabel, getByPlaceholderText, getByText } = renderWithTheme(
      <WelcomeScreen />
    );

    const title = getByA11yLabel('title');
    const input = getByPlaceholderText('Your name');
    const button = getByText('Send');

    expect(title.props.children).toMatch('What is your name?');
    expect(input.props.placeholder).toBe('Your name');
    expect(button.props.children).toBe('Send');
  });
});
