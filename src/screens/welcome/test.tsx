import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import { WelcomeScreen } from '.';
import { renderWithTheme } from '../../utils/renderWithTheme';

const mockNavigator = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigator,
  }),
}));

jest.spyOn(Alert, 'alert');

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

  it('should render error when input has no value', async () => {
    const { getByText } = renderWithTheme(<WelcomeScreen />);

    const button = getByText('Send');

    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith('You need to put a name, dude.');
  });

  it('should navigate to another screen', async () => {
    const { getByText, getByPlaceholderText } = renderWithTheme(
      <WelcomeScreen />
    );

    const input = getByPlaceholderText('Your name');
    const button = getByText('Send');

    fireEvent.changeText(input, 'allex');
    fireEvent.press(button);

    expect(mockNavigator).toHaveBeenCalled();
  });
});
