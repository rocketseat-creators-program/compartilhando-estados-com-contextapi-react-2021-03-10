import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileCard from './ProfileCard';

describe('<ProfileCard />', () => {
  test('it should mount', () => {
    render(<ProfileCard />);
    
    const profileCard = screen.getByTestId('ProfileCard');

    expect(profileCard).toBeInTheDocument();
  });
});