import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoForm from '../components/todo/form';

describe('Testing our to-do form', () => {
  it('should display our form', async () => {
    render(<TodoForm />);
    const DOMElement = await screen.findByTestId('display-head-form');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
});