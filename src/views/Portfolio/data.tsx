import { FiGithub, FiFigma } from 'react-icons/fi';

import { Translate } from 'next-translate';

import generateArray from '~/helpers/generateArray';

export const categories = (t: Translate) =>
  generateArray(5).map((id) => t(`categories.${id}`));

export const projects = (t: Translate) => [
  {
    title: 'DoctorTime',
    subTitles: [
      'Node',
      'Postgres',
      'Redis',
      'Sequelize',
      'React',
      'React Native',
    ],
    tags: [t`categories.1`, t`categories.2`, t`categories.3`],
    content: (
      <>
        {t`projects.doctorTime.0`}
        <br />
        <br />
        {t`projects.doctorTime.1`}
      </>
    ),
    buttons: [
      {
        label: (
          <>
            {t`buttons.github`} <FiGithub />
          </>
        ),
        appearance: 'primary',
        as: 'a',
        href: 'https://github.com/danielmesquitta/doctortime',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'Trillo',
    subTitles: ['Javascript', 'Sass'],
    tags: [t`categories.2`, t`categories.4`],
    content: (
      <>
        {t`projects.trillo.0`}
        <br />
        <br />
        {t`projects.trillo.1`}
        <a
          href="https://www.udemy.com/course/advanced-css-and-sass/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_437497333833_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1031438_._pd__._&matchtype=b&gclid=CjwKCAjwrvv3BRAJEiwAhwOdM3Qp3Le-a-Cd9EiBy0y6Mc9vztPVvOUyeIgiC2DgsSLOPoZzk28RFRoCixEQAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          {t`projects.trillo.2`}
        </a>
        {t`projects.trillo.3`}
      </>
    ),
    buttons: [
      {
        label: t`buttons.site`,
        appearance: 'primary',
        as: 'a',
        href: 'https://danielmesquitta.github.io/trillo/',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
      {
        label: (
          <>
            {t`buttons.github`} <FiGithub />
          </>
        ),
        appearance: 'primary',
        outline: true,
        as: 'a',
        href: 'https://github.com/danielmesquitta/trillo',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'Medfy',
    subTitles: ['Typescript', 'Node', 'Knex', 'Next'],
    tags: [t`categories.1`, t`categories.2`],
    content: (
      <>
        {t`projects.medfy.0`}
        <br />
        <br />
        {t`projects.medfy.1`}
      </>
    ),
    buttons: [
      {
        label: t`buttons.flow`,
        appearance: 'primary',
        as: 'a',
        href: 'http://estudioflow.com.br/',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'ChatApp',
    subTitles: ['Design', 'Figma', 'Gimp'],
    tags: ['Design'],
    content: (
      <>
        {t`projects.chatApp.0`}
        <a
          href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
          target="_blank"
          rel="noreferrer"
        >
          {t`projects.chatApp.1`}
        </a>
        <br />
        <br />
        {t`projects.chatApp.2`}
      </>
    ),
    buttons: [
      {
        label: t`buttons.prototype`,
        appearance: 'primary',
        as: 'a',
        href:
          'https://www.figma.com/proto/bSB2JoDpmZiThd4BWQx2vh/Chat-App?node-id=107%3A17&scaling=min-zoom',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
      {
        label: (
          <>
            {t`buttons.figma`} <FiFigma />
          </>
        ),
        appearance: 'primary',
        outline: true,
        as: 'a',
        href:
          'https://www.figma.com/file/bSB2JoDpmZiThd4BWQx2vh/Chat-App?node-id=107%3A2',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'Nexter',
    subTitles: ['Javascript', 'Sass'],
    tags: ['Web', 'Design'],
    content: (
      <>
        {t`projects.nexter.0`}
        <br />
        <br />
        {t`projects.nexter.1`}
        <a
          href="https://www.udemy.com/course/advanced-css-and-sass/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_437497333833_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1031438_._pd__._&matchtype=b&gclid=CjwKCAjwrvv3BRAJEiwAhwOdM3Qp3Le-a-Cd9EiBy0y6Mc9vztPVvOUyeIgiC2DgsSLOPoZzk28RFRoCixEQAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          {t`projects.nexter.2`}
        </a>
        {t`projects.nexter.3`}
      </>
    ),
    buttons: [
      {
        label: t`buttons.site`,
        appearance: 'primary',
        as: 'a',
        href: 'https://danielmesquitta.github.io/nexter/',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
      {
        label: (
          <>
            {t`buttons.github`} <FiGithub />
          </>
        ),
        appearance: 'primary',
        outline: true,
        as: 'a',
        href: 'https://github.com/danielmesquitta/nexter',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'github_explorer',
    subTitles: ['Typescript', 'React', 'React Native'],
    tags: ['Web', 'Mobile'],
    content: (
      <>
        {t`projects.github_explorer.0`}
        <br />
        <br />
        {t`projects.github_explorer.1`}
      </>
    ),
    buttons: [
      {
        label: (
          <>
            {t`buttons.github`} <FiGithub />
          </>
        ),
        appearance: 'primary',
        as: 'a',
        href: 'https://github.com/danielmesquitta/githubexplorer',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'Ecoleta',
    subTitles: [
      'Typescript',
      'Node',
      'SQLite',
      'Knex',
      'React',
      'React Native',
    ],
    tags: ['Back-end', 'Web', 'Mobile'],
    content: (
      <>
        {t`projects.ecoleta.0`}
        <br />
        <br />
        {t`projects.ecoleta.1`}
        <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
          {t`projects.ecoleta.2`}
        </a>
        {t`projects.ecoleta.3`}
      </>
    ),
    buttons: [
      {
        label: (
          <>
            {t`buttons.github`} <FiGithub />
          </>
        ),
        appearance: 'primary',
        as: 'a',
        href: 'https://github.com/danielmesquitta/ecoleta',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'TeamApp',
    subTitles: ['Design', 'Figma', 'Gimp'],
    tags: ['Design'],
    content: (
      <>
        {t`projects.teamApp.0`}
        <br />
        <br />
        {t`projects.teamApp.1`}
        <a
          href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
          target="_blank"
          rel="noreferrer"
        >
          {t`projects.teamApp.2`}
        </a>
        {t`projects.teamApp.3`}
      </>
    ),
    buttons: [
      {
        label: t`buttons.prototype`,
        appearance: 'primary',
        as: 'a',
        href:
          'https://www.figma.com/proto/cg5V3NHJlgVPx8CKSzADLy/Team-App-Design?node-id=3%3A33&scaling=min-zoom',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
      {
        label: (
          <>
            {t`buttons.figma`} <FiFigma />
          </>
        ),
        appearance: 'primary',
        outline: true,
        as: 'a',
        href:
          'https://www.figma.com/file/cg5V3NHJlgVPx8CKSzADLy/Team-App-Design?node-id=0%3A1',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
  {
    title: 'eCommerce',
    subTitles: ['Typescript', 'React', 'React Native'],
    tags: ['Web', 'Mobile'],
    content: (
      <>
        {t`projects.eCommerce.0`}
        <br />
        <br />
        {t`projects.eCommerce.1`}
      </>
    ),
    buttons: [
      {
        label: (
          <>
            {t`buttons.github`} <FiGithub />
          </>
        ),
        appearance: 'primary',
        as: 'a',
        href: 'https://github.com/danielmesquitta/ecommerce',
        target: '_blank',
        rel: 'noreferrer',
        hasHover: false,
      },
    ],
  },
];
