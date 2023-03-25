import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderListPage from 'pages/OrderListPage';

test('표가 나오는지', () => {
  render(<OrderListPage />);
  const Element = screen.getByText(/선택한 날짜/);
  expect(Element).toBeInTheDocument();
});
