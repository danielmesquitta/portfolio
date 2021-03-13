import { FiGithub, FiFigma } from 'react-icons/fi';

import { Translate } from 'next-translate';

export const categories = (t: Translate) =>
  [0, 1, 2, 3, 4].map((id) => t(`categories.${id}`));

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
    tags: [t('categories.1'), t('categories.2'), t('categories.3')],
    content: (
      <>
        {t('projects.doctorTime.content.0')}
        <br />
        <br />
        {t('projects.doctorTime.content.1')}
      </>
    ),
    buttons: [
      {
        label: (
          <>
            {t('buttons.github')} <FiGithub />
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
    tags: [t('categories.2'), t('categories.4')],
    content: (
      <>
        {t('projects.trillo.content.0')}
        <br />
        <br />
        {t('projects.trillo.content.1')}
        <a
          href="https://www.udemy.com/course/advanced-css-and-sass/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_437497333833_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1031438_._pd__._&matchtype=b&gclid=CjwKCAjwrvv3BRAJEiwAhwOdM3Qp3Le-a-Cd9EiBy0y6Mc9vztPVvOUyeIgiC2DgsSLOPoZzk28RFRoCixEQAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          {t('projects.trillo.content.2')}
        </a>
        {t('projects.trillo.content.3')}
      </>
    ),
    buttons: [
      {
        label: t('buttons.site'),
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
            {t('buttons.github')} <FiGithub />
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
    tags: [t('categories.1'), t('categories.2')],
    content: (
      <>
        {t('projects.medfy.content.0')}
        <br />
        <br />
        {t('projects.medfy.content.1')}
      </>
    ),
    buttons: [
      {
        label: t('buttons.flow'),
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
        {t('projects.chatApp.content.0')}
        <a
          href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
          target="_blank"
          rel="noreferrer"
        >
          {t('projects.chatApp.content.1')}
        </a>
        <br />
        <br />
        {t('projects.chatApp.content.2')}
      </>
    ),
    buttons: [
      {
        label: 'Ver Protótipo',
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
            Ver Design <FiFigma />
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
        O meu primeiro contato com técnicas de estilização de sites utilização
        ferramentas do CSS3 como o display grid.
        <br />
        <br />
        Aqui, no curso{' '}
        <a
          href="https://www.udemy.com/course/advanced-css-and-sass/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_437497333833_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1031438_._pd__._&matchtype=b&gclid=CjwKCAjwrvv3BRAJEiwAhwOdM3Qp3Le-a-Cd9EiBy0y6Mc9vztPVvOUyeIgiC2DgsSLOPoZzk28RFRoCixEQAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          Advanced CSS and Sass
        </a>{' '}
        construí esse projeto de portfólio para uma falsa companhia imobiliária
        que precisava apresentar uma boa estratégia de marketing, mostrando seus
        benefícios, casas disponíveis, preços, etc.
      </>
    ),
    buttons: [
      {
        label: 'Ir para o site',
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
            Ver no github <FiGithub />
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
        O meu primeiro contato com Typescript em um projeto feito para
        plataformas Web e Mobile com React e React Native, sendo este um
        agregador de repositórios desenvolvido utilizando a própria API do
        github.
        <br />
        <br />
        Aqui pude experimentar as vantagens do Typescript, uma linguagem que
        mesmo oferecendo uma tipagem mais forte não perde o dinamismo dado pelo
        Javascript.
      </>
    ),
    buttons: [
      {
        label: (
          <>
            Ver no github <FiGithub />
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
        Aplicação com Back-end, Front-end e Mobile, oferecendo um serviço de
        cadastros e visualização de locais de coleta seletiva, com integração a
        mapas e uma bela interface.
        <br />
        <br />
        Projeto desenvolvido durante a Next Level Week, evento feito pela{' '}
        <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">
          Rocketseat
        </a>
        , uma famosa instituição brasileira de ensino de programação.
      </>
    ),
    buttons: [
      {
        label: (
          <>
            Ver no github <FiGithub />
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
        Design da Landing Page de um falso produto que seria similar a
        plataformas como o Teams da Microsoft.
        <br />
        <br />
        Criado durante o curso{' '}
        <a
          href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
          target="_blank"
          rel="noreferrer"
        >
          Complete Web Design: from Figma to Webflow to Freelancing
        </a>{' '}
        onde pude aplicar diversos conhecimentos e técnicas de design.
      </>
    ),
    buttons: [
      {
        label: 'Ver Protótipo',
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
            Ver Design <FiFigma />
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
        Projeto pessoal nas plataforma Web e Mobile que simula um e-commerce de
        tênis, com funcionalidade de adicionar itens à lista, cálculo do preço
        total e todas estas funcionalidades básicas esperadas em um sistema de
        comércio online.
        <br />
        <br />
        Este teve o principal objetivo de me ensinar a utilizar o Redux para
        manipulação dos Estados do React em múltiplos componentes.
      </>
    ),
    buttons: [
      {
        label: (
          <>
            Ver no github <FiGithub />
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
