
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../tdlm/src/header';

describe('Testing our Header component', () => {
  it('should display heading header', async () => {
    render(<Header />);
    const DOMElement = await screen.findByTestId('display-head');
    expect(DOMElement).not.toBeEmptyDOMElement();
  });
});