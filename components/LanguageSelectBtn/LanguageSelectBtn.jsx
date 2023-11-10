import { Button } from '@mantine/core';

import { useLanguageContext } from '../../context/LanguageContext';

const LanguageSelectBtn = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguageContext();

  return (
    <>
        <Button
          variant="outline"
          size="xs"
          compact="true"
          onClick={() => setSelectedLanguage(`${selectedLanguage === 'ltu' ? 'eng' : 'ltu'}`)}
        >
          {selectedLanguage === 'ltu' ? 'ENG' : 'LTU'}
        </Button>
    </>
  );
};

export default LanguageSelectBtn;
