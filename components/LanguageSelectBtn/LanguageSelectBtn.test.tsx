import { render, screen, fireEvent } from '@/test-utils';
import LanguageSelectBtn from './LanguageSelectBtn';
import { LanguageProvider } from '@/context/LanguageContext';

describe('LanguageSelectBtn', () => {
  it('starts with the correct initial state', () => {
    render(
      <LanguageProvider>
        <LanguageSelectBtn />
      </LanguageProvider>
    );

    expect(screen.getByText(/ENG/i)).toBeInTheDocument();
  });

  it('toggles the selected language when the button is clicked', () => {
    render(
      <LanguageProvider>
        <LanguageSelectBtn />
      </LanguageProvider>
    );
    const button = screen.getByText(/ENG/i);

    fireEvent.click(button);

    expect(screen.getByText('LTU')).toBeInTheDocument();
  });
});
