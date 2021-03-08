interface ProjectContainerProps {
  isVisible: boolean;
}

interface ProjectProps extends ProjectContainerProps {
  image: string;
  title: string;
  subTitles: string[];
  onClick: () => void;
}
