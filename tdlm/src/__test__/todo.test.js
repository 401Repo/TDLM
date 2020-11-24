import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ToDo from '../components/todo/todo';

describe('Testing our to-do', () => {
  it('should display our todo components', async () => {
    render(<ToDo />);
    const DOMElement = await screen.findByTestId('display-head');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
});