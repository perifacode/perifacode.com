import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('<Text />', () => {
  it('it should mount', () => {
    render(<Text>Teste de componente Texto</Text>);
    
    const text = screen.getByTestId('Text');

    expect(text).toBeInTheDocument()
  });

  it('it should be a span', () => {
    render(<Text type='span'>Teste de componente Texto</Text>);
    const text = screen.getByTestId('Text');
    const textType = text.getElementsByTagName('span')
    console.log(textType)
    expect(textType.length).toBe(5)
  });
});