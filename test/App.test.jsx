import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('Anmol Boutique routes', () => {
  it('renders the home page content', () => {
    const markup = renderToString(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(markup).toContain('Welcome To Anmol Boutique');
    expect(markup).toContain('Explore Collection');
  });

  it('renders the gallery route with original collection content', () => {
    const markup = renderToString(
      <MemoryRouter initialEntries={['/gallery']}>
        <App />
      </MemoryRouter>,
    );

    expect(markup).toContain('Traditional Punjabi Suit');
    expect(markup).toContain('/images/DesignerSuit.webp');
  });
});
