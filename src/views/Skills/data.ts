import {
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiPenTool,
  FiWind,
} from 'react-icons/fi';

import { Translate } from 'next-translate';

const icons = [FiDatabase, FiGlobe, FiSmartphone, FiWind, FiPenTool];

const data = (t: Translate) =>
  icons.map((Icon, index) => ({
    Icon,
    title: t(`cards.${index}.title`),
    content: t(`cards.${index}.content`),
  }));

export default data;
