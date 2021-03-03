interface HeadingContainerProps {
  appearance?: 'primary' | 'secondary';
}

interface HeadingProps extends HeadingContainerProps {
  id?: string | number;
  title: string | React.Fragment;
  subTitle: string | React.Fragment;
}
