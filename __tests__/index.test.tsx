import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { Post } from '../utils/api';

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockUseRouter = jest.requireMock('next/router').useRouter;

describe('Home page', () => {
  const mockPost: Post = {
    userId: 1,
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
  };

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      isFallback: false,
    });
  });

  it('renders data correctly', () => {
    render(<Home data={mockPost} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Home data={null} error="Failed to fetch data" />);
    expect(screen.getByText(/Error: Failed to fetch data/i)).toBeInTheDocument();
  });

  it('renders no data message when data and error are null', () => {
    render(<Home data={null} />);
    expect(screen.getByText(/No data available./i)).toBeInTheDocument();
  });

});
