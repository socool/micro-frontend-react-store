import styles from './banner.module.css';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string
}

export function Banner(props: BannerProps) {
  return <header>{props.text}</header>;
}

export default Banner;
