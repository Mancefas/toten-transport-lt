import { render, screen, fireEvent } from '@/test-utils';
import WorkingTime from './WorkingTime';

describe('WorkingTime component', () => {
  it('button is rendered', () => {
    render(<WorkingTime />);
    expect(screen.getByText('Darbo laikas')).toBeInTheDocument();
  });
  it('should show time when pressed', () => {
    render(<WorkingTime />);
    const btn = screen.getByText(/Darbo laikas/);
    fireEvent.click(btn);
    expect(screen.getByText('9:00 - 17:00')).toBeInTheDocument();
  });
});
