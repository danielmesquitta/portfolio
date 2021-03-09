import { FiGithub, FiFigma } from 'react-icons/fi';

export const categories = [
  'Todos os projetos',
  'Back-end',
  'Web',
  'Mobile',
  'Design',
];

export const projects = [
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
    tags: ['Back-end', 'Web', 'Mobile'],
    content: (
      <>
        Este foi meu primeiro projeto pessoal verdadeiramente full-stack, com
        uma REST API, versão WEB e MOBILE.
        <br />
        <br />
        Ele consiste basicamente em um sistema de agendamento de consultas
        médicas, onde pacientes e doutores podem se cadastrar e agendar
        consultas.
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
    tags: ['Web', 'Design'],
    content: (
      <>
        Esse é um site apenas como uma página que tem o intúito de ser uma
        plataforma que resolveria em apenas um lugar, todos os problemas de uma
        pessoa em seu período de escolha e preparo para uma viagem.
        <br />
        <br />
        Desenvolvido durante o bootcamp{' '}
        <a
          href="https://www.udemy.com/course/advanced-css-and-sass/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_437497333833_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1031438_._pd__._&matchtype=b&gclid=CjwKCAjwrvv3BRAJEiwAhwOdM3Qp3Le-a-Cd9EiBy0y6Mc9vztPVvOUyeIgiC2DgsSLOPoZzk28RFRoCixEQAvD_BwE"
          target="_blank"
          rel="noreferrer"
        >
          Advanced CSS and Sass
        </a>
        , aperfeiçoou meus conhecimentos na estilização de sites utilizando
        ferramentas como Sass e features modernas do CSS.
      </>
    ),
    buttons: [
      {
        label: 'Ir para o site',
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
            Ver no github <FiGithub />
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
    tags: ['Back-end', 'Web'],
    content: (
      <>
        Um dos principais produtos da minha empresa atual (Estúdio Flow), um
        sistema para organização de hospitais.
        <br />
        <br />
        Nele pude participar na criação e documentação do back-end, na
        integração entre o front-end e o back-end, na criação de componentes,
        animações e na responsividade do site.
      </>
    ),
    buttons: [
      {
        label: 'Conhecer Estúdio Flow',
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
        O meu primeiro contato com design fora da empresa que atualmente
        trabalho. Este projeto foi desenvolvido durante o curso{' '}
        <a
          href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
          target="_blank"
          rel="noreferrer"
        >
          Complete Web Design: from Figma to Webflow to Freelancing
        </a>
        <br />
        <br />
        Nele pude aprender os princípios sobre design, a utilização de técnicas
        como o grid de 12 colunas, praticas de seleção de boas cores, imagens e
        suas respectivas formas de manipulação.
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
            Ver Design no Figma <FiFigma />
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
            Ver Design no Figma <FiFigma />
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
