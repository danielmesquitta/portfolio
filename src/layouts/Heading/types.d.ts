interface HeadingContainerProps {
  id: string;
  appearance?: 'primary' | 'secondary';
}

interface HeadingProps extends HeadingContainerProps {
  title: string | React.Fragment;
  subTitle: string | React.Fragment;
}
