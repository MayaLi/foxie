import { render } from '@testing-library/react';

import Advocate from './advocate';

describe('Advocate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Advocate />);
    expect(baseElement).toBeTruthy();
  });
});
