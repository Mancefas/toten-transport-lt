import { render, screen, fireEvent } from '@/test-utils';
import LanguageSelectBtn from './LanguageSelectBtn';

describe('LanguageSelectBtn', () => {
  it('starts with the correct initial state', () => {
    render(<LanguageSelectBtn />);

    expect(screen.getByText(/LTU/)).toBeInTheDocument();
  });

  it('toggles the selected language when the button is clicked', () => {
    render(<LanguageSelectBtn />);
    const button = screen.getByText(/LTU/);

    fireEvent.click(button);

    expect(screen.getByText('ENG')).toBeInTheDocument();
  });
});
